export interface IUserJWT {
    email: string;
    id: number;
    iat: number;
    exp: number;

    // TODO: Voir si je rajoute les roles utilisateur
}