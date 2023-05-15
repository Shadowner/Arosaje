import * as express from "express";
import * as jwt from "jsonwebtoken";
import { InvalidToken } from "../errors/user/InvalidToken";
import { BlacklistedJwt } from "../models/blacklistedJwt.model";
import { User } from "../models/user.model";

export async function expressAuthentication(
    request: express.Request,
    securityName: string,
    roles?: string[]
): Promise<any> {
    if (securityName === "jwt") {
        //TODO: Je fais mes tests par rapport à un JWT
        const token = request.headers["x-access-token"];

        if (!token || token instanceof Array)
            throw new Error("No valid token provided");

        return new Promise(async (res, rej) => {

            if (await BlacklistedJwt.findOneBy({ token })) {
                return rej(new InvalidToken());
            }

            jwt.verify(token, process.env.JWT_SECRET!, async (err, decoded: any) => {
                if (err)
                    rej(err);
                if (roles && roles.length > 0) {
                    if ((!decoded.scopes || decoded.scopes.length === 0))
                        return rej(new Error("JWT does not contain required scope."));

                    for (let role of roles) {
                        if (!decoded.scopes.includes(role))
                            return rej(new Error("JWT does not contain required scope."));
                    }
                }

                const user = await User.findOne(
                    {
                        where: {
                            id: decoded.id
                        },
                        relations: {
                            roles: true,
                            plants: true
                        }
                    }
                );
                if (!user)
                    return rej(new InvalidToken());
                return res({ user, jwtType: decoded.type });
            });
        });
    }

    throw new Error("Incorrect SecurityName")
}

