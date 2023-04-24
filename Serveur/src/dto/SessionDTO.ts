import { BaseEntity } from "typeorm";
import { FileDTO } from "./FileDTO";
import { GuardDTO } from "./GuardDTO";

export interface SessionDTO extends BaseEntity {
    date:Date;
    comment:string;
    guard:GuardDTO;
    files:FileDTO[];
}