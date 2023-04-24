import { BaseEntity } from "./BaseEntity";
import { PlantDTO } from "./PlantDTO";
import { SessionDTO } from "./SessionDTO";
import { UserDTO } from "./UserDTO";

export interface GuardDTO extends BaseEntity {
    id: number,
    startDate: Date,
    endDate: Date,
    guardianUser: UserDTO,
    guardedPlant: PlantDTO,
    sessions: SessionDTO[]
}