import { BaseEntity } from "./BaseEntity";
import { UserDTO } from "./UserDTO";

export interface FileDTO extends BaseEntity {
    url: string,
    owner: UserDTO,
    shared: UserDTO[],
    name:string,
}