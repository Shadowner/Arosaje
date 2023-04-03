import { Singleton } from "typescript-ioc";

@Singleton
export class FileService {
    public test() {
        console.log("Je suis l'user service");
    }
}