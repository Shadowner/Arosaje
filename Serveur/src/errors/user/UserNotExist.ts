export class UserNotExist extends Error {
    constructor() {
        super("User does not exist");
    }
}