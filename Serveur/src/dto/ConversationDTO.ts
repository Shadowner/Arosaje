import { MessageDTO } from "./MessageDTO";
import { UserDTO } from "./UserDTO";

export interface ConversationDTO {
    id:number,
    messages: MessageDTO
    name: string,
    users?: UserDTO[]
}