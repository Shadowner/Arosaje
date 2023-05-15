export interface IUserJWT {
    email: string;
    id: number;
    iat: number;
    exp: number;
    roles: string[];
    firstname: string;
    lastname: string;

    // TODO: Voir si je rajoute les roles utilisateur
}