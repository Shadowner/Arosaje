import { BaseEntity } from "./BaseEntity";

export interface RoleDTO extends BaseEntity {
    name:string,
    flags:string[]
}