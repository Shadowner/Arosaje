import { ConversationDTO } from "./ConversationDTO";
import { UserDTO } from "./UserDTO";

export interface MessageDTO {
    id: number,
    content: string,
    sendDate: Date,
    author: UserDTO,
    conversation: ConversationDTO
}