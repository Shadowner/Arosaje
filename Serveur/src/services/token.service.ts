import { Singleton } from "typescript-ioc";
import { User } from "../models/user.model";

@Singleton
export class TokenService {
    private knwownTokens: { user: User, token: string }[] = [];

    public generateToken(user: User): string {
        const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.knwownTokens.push({ user, token });
        return token;
    }

    public verifyToken(token: string) {
        const found = this.knwownTokens.find((t) => t.token === token);
        if (found) {
            this.removeToken(token);
            return found.user;
        }
        return null;
    }

    public removeToken(token: string) {
        this.knwownTokens = this.knwownTokens.filter((t) => t.token !== token);
    }
}