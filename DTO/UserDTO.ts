import { BaseEntity } from "./BaseEntity";
import { ConversationDTO } from "./ConversationDTO";
import { FileDTO } from "./FileDTO";
import { PlantDTO } from "./PlantDTO";
import { RoleDTO } from "./RoleDTO";

export interface UserDTO extends BaseEntity {
    firstname: string,
    lastname: string,
    birthdate: Date,
    mail: string,
    phone: string,
    address: string,
    city: string,
    country: string,
    password: string,

    avatar: FileDTO,
    files: FileDTO[],

    conversations: ConversationDTO[],
    plants: PlantDTO[],
    roles:RoleDTO[],
    last_connection: Date,
}