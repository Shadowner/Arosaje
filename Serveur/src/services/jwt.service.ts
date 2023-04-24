import { sign, verify } from "jsonwebtoken";
import { Singleton } from "typescript-ioc";
import { InvalidToken } from "../errors/user/InvalidToken";
import { User } from "../models/user.model";

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

    public generateToken(user: User) {
        const token = sign({
            id: user.id,
            email: user.email,
            role: user.roles?.map(role => role.toObject()),
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
}