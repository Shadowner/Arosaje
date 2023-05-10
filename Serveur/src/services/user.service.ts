import { compare } from "bcrypt";
import { createHash } from "crypto";
import { decode, verify } from "jsonwebtoken";
import { Inject } from "tsoa";
import { Singleton } from "typescript-ioc";
import { ILoginCredentials } from "../controllers/user.controller";
import { UserDTO } from "../DTO/UserDTO";
import { UserAlreadyExist } from "../errors/user/UserAlreadyExist";
import { UserNotExist } from "../errors/user/UserNotExist";
import { IUserJWT } from "../interfaces/UserJwt";
import { BlacklistedJwt } from "../models/blacklistedJwt.model";
import { User, UserCreate } from "../models/user.model";
import { JWTServices } from "./jwt.service";

@Singleton
export class UserService {

    @Inject()
    private jwtService!: JWTServices;

    public async register(user: UserCreate) {

    }

    public async login(credential: ILoginCredentials) {

    }

    public async logout(token: string) {
        const potential = await BlacklistedJwt.findOneBy({ token });
        if (potential) {
            return;
        }
        const decoded = decode(token) as IUserJWT;
        const blacklistedJWT = await BlacklistedJwt.create({ token, expirationDate: new Date(decoded.exp) });
        return blacklistedJWT.save();
    }

}