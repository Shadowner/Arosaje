import { Singleton } from "typescript-ioc";

@Singleton
export class UserService {
    public test() {
        console.log("Je suis l'user service");
    }
}