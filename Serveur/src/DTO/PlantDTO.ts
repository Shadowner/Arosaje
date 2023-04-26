import { BaseEntity } from "./BaseEntity";
import { ConversationDTO } from "./ConversationDTO";
import { GuardDTO } from "./GuardDTO";

export interface PlantDTO extends BaseEntity {
    userId: string,
    conversationIds: number[],
    name: string,
    type: string,
    description: string,
    size: string,

    guards: GuardDTO[],
}

export interface PlantCreate {
    name: string,
    type: string,
    description: string,
    size: string,
}