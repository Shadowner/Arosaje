import { Singleton } from "typescript-ioc";
import { User } from "../models/user.model";

@Singleton
export class PhoneService {
    public sendSMS(to: string, message: string) {
        //TODO: Ahah
        return true;
    }

    public sendConfirmationSMS(to: User, token: string) {
        const message = `Bonjour ${to.firstname} ${to.lastname}, veuillez confirmer votre compte en cliquant sur le lien suivant: http://localhost:3000/confirm/${token}`;
        return this.sendSMS(to.phoneNumber, message);
    }

    public sendTwoFASMS(to: User, token: string) {
        const message = `Bonjour ${to.firstname} ${to.lastname}, voici votre token de connexion: ${token}`;
        return this.sendSMS(to.phoneNumber, message);
    }
}