import { Request as ExpressRequest } from "express";
import { Body, Controller, Delete, Patch, Path, Post, Request, Route, Security, Tags } from "tsoa";
import { Inject } from "typescript-ioc";
import { BaseEntity } from "../DTO/BaseEntity";
import { UserDTO } from "../DTO/UserDTO";
import { IUserJWT } from "../interfaces/UserJwt";
import { User, UserCreate } from "../models/user.model";
import { JWTServices } from "../services/jwt.service";
import { UserService } from "../services/user.service";

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

    @Post("register")
    public async register(@Body() user: UserCreate) {
        const newUser = await this.userService.register(user).catch((e: Error) => e);
        if (newUser instanceof Error) {
            this.setStatus(400);
            return {
                error: newUser.message
            }
        }

        return { jwt: this.JWTServices.generateToken(newUser) };
    }

    @Post("login")
    public async login(@Body() credential: ILoginCredentials) {
        const potentialUser = await this.userService.login(credential).catch((e: Error) => e);
        if (potentialUser instanceof Error) {
            this.setStatus(401);
            return {
                error: potentialUser.message
            }
        }

        return { jwt: this.JWTServices.generateToken(potentialUser) };
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
    public async update(@Body() updateObj: Partial<Omit<UserDTO, keyof (BaseEntity)>>) {

    }

    @Security("jwt")
    @Post("test")
    public async test(@Request() req: ExpressRequest & { user: User }) {
        console.log(req.user);
    }

    @Security("jwt")
    @Delete("{id}")
    public async delete(@Path() id: string) {

    }

    constructor() {
        super();
    }

}