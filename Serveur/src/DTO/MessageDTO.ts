import { UserDTO } from "./UserDTO";

export interface MessageDTO {
    user:UserDTO[],
    data: string,
    date: Date
}