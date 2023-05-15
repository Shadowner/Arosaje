import { sign, verify } from "jsonwebtoken";
import { Singleton } from "typescript-ioc";
import { InvalidToken } from "../errors/user/InvalidToken";
import { User } from "../models/user.model";

export enum JWT_TYPE {
    USER,
    REGISTERING,
    VALIDATING,
    PASSWORD_RESET,
}
@Singleton
export class JWTServices {
    constructor(
        public jwtSecret: string,
        public jwtExpiration: number,
    ) {
        this.jwtSecret = process.env.JWT_SECRET!;
        this.jwtExpiration = Number(process.env.JWT_EXPIRES_IN!) * 60 * 60;
        console.log(this.jwtSecret, this.jwtExpiration)
    }

    public generateToken(user: User, type: JWT_TYPE = JWT_TYPE.USER) {
        const token = sign({
            id: user.id,
            email: user.email,
            roles: user.roles?.map(role => role.toObject()),
            type: type,
            firstname: user.firstname,
            lastname: user.lastname,
        }, this.jwtSecret, {
            expiresIn: this.jwtExpiration,
        });
        return token;
    }

    public verifyToken(token: string) {
        try {
            const decoded = verify(token, this.jwtSecret);
            return decoded;
        }
        catch (err) {
            throw new InvalidToken();
        }
    }

    public getTokenEpirationDate(token: string) {
        const decoded = this.verifyToken(token);
        if (typeof decoded === 'string') {
            return new Date(0);
        }

        if (decoded.exp === undefined) {
            return new Date(0);
        }

        return new Date(decoded.exp);
    }
}