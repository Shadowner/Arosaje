import { MessageDTO } from "./MessageDTO";
import { UserDTO } from "./UserDTO";

export interface ConversationDTO {
    messages: MessageDTO
    nom: string,
    creation_date: Date,
    users?: UserDTO[]
}