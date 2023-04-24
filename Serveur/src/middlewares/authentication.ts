import * as express from "express";
import * as jwt from "jsonwebtoken";
import { InvalidToken } from "../errors/user/InvalidToken";
import { User } from "../models/user.model";

export async function expressAuthentication(
    request: express.Request,
    securityName: string,
    scopes?: string[]
): Promise<any> {
    if (securityName === "jwt") {
        //TODO: Je fais mes tests par rapport à un JWT
        const token = request.headers["x-access-token"];

        if (!token || token instanceof Array)
            throw new Error("No valid token provided");

        return new Promise((res, rej) => {
            //TODO: Fetch un vrai Secret
            jwt.verify(token, process.env.JWT_SECRET!, async (err, decoded: any) => {
                if (err)
                    throw err;
                if (scopes && scopes.length > 0) {
                    if ((!decoded.scopes || decoded.scopes.length === 0))
                        return rej(new Error("JWT does not contain required scope."));

                    for (let scope of scopes) {
                        if (!decoded.scopes.includes(scope))
                            return rej(new Error("JWT does not contain required scope."));
                    }
                }

                const user = await User.findOneBy({ id: decoded.id });
                if (!user)
                    throw new InvalidToken();
                return res(user);
            });
        });
    }

    throw new Error("Incorrect SecurityName")
}

