import { BaseEntity } from "./BaseEntity";
import { ConversationDTO } from "./ConversationDTO";
import { GuardDTO } from "./GuardDTO";
import { UserDTO } from "./UserDTO";

export interface PlantDTO extends BaseEntity {
    user: UserDTO,
    conversations: ConversationDTO,
    name: string,
    type:string,
    description:string,
    size:string,

    guards:GuardDTO[],

}