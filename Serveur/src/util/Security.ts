import { compare, hash } from "bcrypt";

export class Security {
    public static async hashPasword(password: string) {
        return await hash(password, 6);
    }

    public static async comparePassword(password: string, hashedPassword: string) {
        return await compare(password, hashedPassword);
    }
}