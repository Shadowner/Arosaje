import { Singleton } from "typescript-ioc";

@Singleton
export class MessageService {
    public test() {
        console.log("Je suis l'user service");
    }
}