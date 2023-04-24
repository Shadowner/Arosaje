import { MessageDTO } from "./MessageDTO";
import { UserDTO } from "./UserDTO";

export interface ConversationDTO {
    messages: MessageDTO[]
    nom: string,
    creationDate: Date,
    users?: UserDTO[]
}