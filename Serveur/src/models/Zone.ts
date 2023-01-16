import { IAnimal, IZone, ZONE_TYPE, IPoint } from "../types";
import { ObjectId } from "mongodb";
import { BaseModel } from "./BaseModel";
import { ModelService } from "../services/ModelService";

export interface ICreateZone extends Omit<IZone,
    "_id" |
    "speciesId" |
    "animalsId" |
    "agricoleStatId"> { }
export class Zone extends BaseModel<IZone> implements IZone {
    public static collectionName = "Zone";
    public static create(createItem: ICreateZone) {
        return ModelService.createModel(this, { ...createItem, animalsId: [] });
    }
    public static findById(id: string | ObjectId) {
        return ModelService.getModel(this, id);
    }
    public static find(query: Partial<Zone>) {
        return ModelService.findModel(this, query);
    }

    public name: string;
    public color: string;
    public points: IPoint[];
    public userId: ObjectId;
    public type: ZONE_TYPE;
    public speciesId: ObjectId;
    public animalsId: ObjectId[];
    public agricoleStatId: ObjectId;

    constructor(obj: IZone) {
        super(obj._id, Zone.collectionName);
        this.name = obj.name;
        this.color = obj.color;
        this.points = obj.points;
        this.userId = obj.userId;
        this.type = obj.type;
        this.speciesId = obj.speciesId;
        this.agricoleStatId = obj.agricoleStatId;
        this.animalsId = obj.animalsId;
    }

    public toObject(): IZone {
        return {
            _id: this._id,
            name: this.name,
            color: this.color,
            points: this.points,
            userId: this.userId,
            type: this.type,
            speciesId: this.speciesId,
            agricoleStatId: this.agricoleStatId,
            animalsId: this.animalsId,
        }
    }
}

