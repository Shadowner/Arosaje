import { BaseEntity } from "./BaseEntity";

export interface GuardDTO extends BaseEntity {
    score:number,
    comment:string,
    start_date:Date,
    end_date:Date,
}