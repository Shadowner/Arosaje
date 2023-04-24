import { BaseEntity } from "./BaseEntity";
import { ConversationDTO } from "./ConversationDTO";
import { FileDTO } from "./FileDTO";
import { MessageDTO } from "./MessageDTO";
import { PlantDTO } from "./PlantDTO";
import { RoleDTO } from "./RoleDTO";

export interface UserDTO extends BaseEntity {
    lastname: string,
    firstname: string,
    birthdate: Date,
    email: string,
    phoneNumber: string,
    address: string,
    city: string,
    country: string,
    password: string,

    avatar: FileDTO,
    files: FileDTO[],

    createdAt: Date,
    updatedAt: Date,

    messages: MessageDTO[],
    conversations: ConversationDTO[],
    plants: PlantDTO[],
    roles: RoleDTO[],
    lastConnection: Date,
}