import { BaseEntity } from "./BaseEntity";
import { FileDTO } from "./FileDTO";

export interface PlantTypeDTO extends BaseEntity {
    name: string,
    origineName: string,
    optimalTemperature: number,
    file: FileDTO
}