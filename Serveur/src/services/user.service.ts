import { compare } from "bcrypt";
import { createHash } from "crypto";
import { Singleton } from "typescript-ioc";
import { ILoginCredentials } from "../controllers/user.controller";
import { UserDTO } from "../DTO/UserDTO";
import { UserAlreadyExist } from "../errors/user/UserAlreadyExist";
import { UserNotExist } from "../errors/user/UserNotExist";
import { User, UserCreate } from "../models/user.model";

@Singleton
export class UserService {

    public async register(user: UserCreate) {
        const potentialUser = await User.findBy({
            'email': user.email
        });

        if (potentialUser.length > 0) {
            throw new UserAlreadyExist();
        }
        const instanciedUser = User.create({ ...user });
        return instanciedUser.save();
    }

    public async login(credential: ILoginCredentials) {
        const potentialUser = await User.findBy({
            'email': credential.email
        });

        if (potentialUser.length === 0) {
            throw new UserNotExist();
        }
        const user = potentialUser[0];

        if (await compare(credential.password, user.password)) {
            return user;
        }

        throw new UserNotExist();
    }

    public async logout() {
        // TODO
    }



}