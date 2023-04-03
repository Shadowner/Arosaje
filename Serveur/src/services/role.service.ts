import { Singleton } from "typescript-ioc";

@Singleton
export class RoleService {
    public test() {
        console.log("Je suis l'user service");
    }
}