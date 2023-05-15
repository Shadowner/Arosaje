import { compare } from "bcrypt";
import { Request as ExpressRequest } from "express";
import { Body, Controller, Delete, Get, Patch, Path, Post, Request, Route, Security, Tags } from "tsoa";
import { Inject } from "typescript-ioc";
import { UserAlreadyExist } from "../errors/user/UserAlreadyExist";
import { UserNotExist } from "../errors/user/UserNotExist";
import { ExpressRequestWithUser } from "../interfaces/ExpressJwt";
import { User, UserCreate } from "../models/user.model";
import { TwoFAService } from "../services/2fa.service";
import { JWTServices, JWT_TYPE } from "../services/jwt.service";
import { MailService } from "../services/mail.service";
import { PhoneService } from "../services/phone.service";
import { TokenService } from "../services/token.service";
import { UserService } from "../services/user.service";
import { InvalidToken } from '../errors/user/InvalidToken';
import { Role } from '../models/role.model';
import { In } from "typeorm";

export interface ILoginCredentials {
    password: string,
    email: string
}

@Tags("Utilisateur")
@Route("user")
export class UserController extends Controller {

    @Inject
    private userService!: UserService;
    @Inject
    private JWTServices!: JWTServices;
    @Inject
    private TwoFAServices!: TwoFAService;
    @Inject
    private TokenService!: TokenService;
    @Inject
    private MailService!: MailService;
    @Inject
    private PhoneService!: PhoneService;

    @Post("register")
    public async register(@Body() user: UserCreate) {
        const potentialUser = await User.findOneBy({
            'email': user.email
        });

        if (potentialUser) {
            throw new UserAlreadyExist();
        }

        const instanciedUser = User.create({ ...user, email: 'notdefined@yet', username: user.lastname + "." + user.firstname });
        instanciedUser.tmpEmail = user.email;
        instanciedUser.tmpPhoneNumber = user.phoneNumber || null;
        //@ts-ignore
        instanciedUser.email = null
        //@ts-ignore
        instanciedUser.phoneNumber = null

        const newUser = await instanciedUser.save();

        const token = this.TokenService.generateToken(newUser);
        const jwt = this.JWTServices.generateToken(newUser, JWT_TYPE.VALIDATING);
        await this.MailService.sendConfirmationMail(newUser, token);

        return { needConfirmation: true, message: 'Un mail de confirmation vous a été envoyé', jwt };
    }

    @Post("login")
    public async login(@Body() credential: ILoginCredentials) {
        const user = await User.findOne({
            where: {

                'email': credential.email
            },
            relations: {
                roles: true
            }
        });

        if (!user) {
            throw new UserNotExist();
        }

        if (!(await compare(credential.password, user.password))) {
            throw new UserNotExist();
        }

        if (user.twoFactorEnabled) {
            const token = this.TwoFAServices.generateToken(user);

            //TODO: Donner le choxi à l'utilisateur de recevoir le token par mail ou par sms
            await this.MailService.sendMail(user.email, 'Token de connexion', `Voici votre token de connexion: ${token}`);
            if (user.phoneNumber) await this.PhoneService.sendTwoFASMS(user, token);
            return { need2FA: true };
        }

        return { jwt: this.JWTServices.generateToken(user) };
    }

    @Post("logout")
    public async logout(@Request() request: ExpressRequest) {
        const token = request.header('x-access-token');
        if (!token) {
            this.setStatus(401);
            return {
                error: "No token provided."
            }
        }

        await this.userService.logout(token);
    }


    @Security("jwt")
    @Patch("update")
    public async update(@Body() updateObj: Partial<UserCreate>, @Request() req: ExpressRequestWithUser) {
        const { user } = req.user;

        if (updateObj.email) {
            throw new Error('Use the /email route to update your email');
        }

        if (updateObj.phoneNumber) {
            throw new Error('Use the /phone route to update your phone number');
        }

        if (updateObj.password) {
            user.password = updateObj.password;
        }

        if (updateObj.firstname) {
            user.firstname = updateObj.firstname;
        }

        if (updateObj.lastname) {
            user.lastname = updateObj.lastname;
        }

        await user.save();

        return { jwt: this.JWTServices.generateToken(user) }
    }

    @Security("jwt")
    @Patch("phone")
    public async phone(@Body() updateObj: { phone: string }, @Request() req: ExpressRequestWithUser) {
        const { user } = req.user;

        const potentialUser = await User.findOneBy({ phoneNumber: updateObj.phone })
        if (potentialUser) {
            throw new Error('Phone number already used')
        }

        if (updateObj.phone === user.phoneNumber) {
            throw new Error('Phone number is the same');
        }

        user.tmpPhoneNumber = updateObj.phone;
        await user.save();
        const token = this.TokenService.generateToken(user);
        await this.PhoneService.sendConfirmationSMS(user, token);

        return { message: 'Confirmation SMS sent', needConfirmation: true };
    }

    @Get("phone/confirm/{code}")
    public async confirmPhone(@Path() code: string) {
        const user = await this.TokenService.verifyToken(code);
        if (!user || !user.tmpPhoneNumber) {
            throw new Error('Invalid token');
        }

        user.phoneNumber = user.tmpPhoneNumber!;
        user.tmpPhoneNumber = null;
        await user.save();

        return { jwt: this.JWTServices.generateToken(user) };
    }

    @Security("jwt")
    @Patch("email")
    public async email(@Body() updateObj: { email: string }, @Request() req: ExpressRequestWithUser) {
        const { user } = req.user;

        if (updateObj.email === user.email) {
            throw new Error('Email is the same');
        }

        const potentialUser = await User.findOneBy({ email: updateObj.email })
        if (potentialUser) {
            throw new Error('Email already used')
        }

        user.tmpEmail = updateObj.email;
        await user.save();

        const token = this.TokenService.generateToken(user);
        await this.MailService.sendConfirmationMail(user, token);

        return { message: 'Confirmation email sent', needConfirmation: true };
    }

    @Get("email/confirm/{token}")
    public async confirmEmail(@Path() token: string) {

        // TODO: Je crois que c'est stupide de faire comme ça mais flemme de réfléchir pour l'instant
        console.log(token);
        const user = await this.TokenService.verifyToken(token);
        console.log(user);
        if (!user || !user.tmpEmail) {
            throw new Error('Invalid token');
        }

        user.email = user.tmpEmail!;
        user.tmpEmail = null;
        await user.save();

        return { jwt: this.JWTServices.generateToken(user, JWT_TYPE.REGISTERING) };
    }

    @Security("jwt")
    @Get("email/resend")
    public async resendMail(@Request() req: ExpressRequestWithUser) {
        const { user } = req.user;

        const token = this.TokenService.generateToken(user);
        const jwt = this.JWTServices.generateToken(user, JWT_TYPE.VALIDATING);
        await this.MailService.sendConfirmationMail(user, token);

        return { needConfirmation: true, message: 'Un mail de confirmation vous a été envoyé', jwt };
    }


    @Security("jwt")
    @Post("register/finish")
    public async finishRegistering(@Request() req: ExpressRequestWithUser, @Body() body: { roles: number[] }) {
        const { user, jwtType } = req.user;
        if (jwtType != JWT_TYPE.REGISTERING) {
            throw new InvalidToken();
        }

        if (!body.roles || body.roles.length === 0) {
            throw new Error('No roles provided');
        }

        const roles = await Role.find({
            where: {
                id: In(body.roles)
            }
        });
        if (roles.length !== body.roles.length) {
            throw new Error('Invalid roles provided');
        }

        user.roles = roles;
        await user.save();

        return { jwt: this.JWTServices.generateToken(user) };
    }


    @Security("jwt")
    @Delete("delete")
    public async delete(@Request() req: ExpressRequestWithUser) {
        const { user } = req.user;
        throw new Error("Not implemented");
    }

    @Post("lost-password")
    public async lostPassword(@Body() email: { email: string }) {
        const potentialUser = await User.findOneBy({ email: email.email });
        if (!potentialUser) {
            throw new Error('No user with this email');
        }

        const token = this.TokenService.generateToken(potentialUser);
        await this.MailService.sendLostPasswordMail(potentialUser, token);

        return { message: 'Reset password email sent', needConfirmation: true };
    }

    @Post("reset-password/{token}")
    public async resetPassword(@Path() token: string, @Body() password: { password: string }) {
        const user = await this.TokenService.verifyToken(token);
        if (!user) {
            throw new Error('Invalid token');
        }

        user.password = password.password;
        await user.save();
    }

    @Get("{id}")
    public async get(@Path() id: string) {
        const potentialUser = await User.findOneBy({ id });
        if (!potentialUser) {
            return null;
        }

        return potentialUser.publicUserObject();
    }

    constructor() {
        super();
    }

}