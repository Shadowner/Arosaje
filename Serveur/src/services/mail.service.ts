import { Singleton } from "typescript-ioc";
import { User } from "../models/user.model";

@Singleton
export class MailService {

    public sendMail(to: string, subject: string, html: string) {
        console.log(`Sending mail to ${to} with subject ${subject} and html ${html}`);
        return true;
    }

    public sendConfirmationMail(to: User, token: string) {
        console.log(`Sending confirmation mail to ${to.tmpEmail} with token ${token}`);
        const subject = "Confirmation de votre compte";
        const html = `<h1>Confirmation de votre compte</h1>
        <p>Bonjour ${to.firstname} ${to.lastname},</p>
        <p>Veuillez confirmer votre compte en cliquant sur le lien suivant: <a href="http://localhost:3000/confirm/${token}">Confirmer mon compte</a></p>
        <p>Merci</p>`;
        return this.sendMail(to.tmpEmail!, subject, html);
    }

    public sendLostPasswordMail(to: User, token: string) {
        console.log(`Sending lost password mail to ${to.email} with token ${token}`);
        const subject = "Réinitialisation de votre mot de passe";
        const html = `<h1>Réinitialisation de votre mot de passe</h1>
        <p>Bonjour ${to.firstname} ${to.lastname},</p>
        <p>Veuillez réinitialiser votre mot de passe en cliquant sur le lien suivant: <a href="http://localhost:3000/reset/${token}">Réinitialiser mon mot de passe</a></p>
        <p>Merci</p>`;
        return this.sendMail(to.email, subject, html);
    }

}