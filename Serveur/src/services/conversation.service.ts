import { Singleton } from "typescript-ioc";

@Singleton
export class ConversationService {
    public test() {
        console.log("Je suis l'user service");
    }
}