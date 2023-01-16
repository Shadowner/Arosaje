import { ObjectId } from "mongodb";
import { ModelService } from "../services/ModelService";
import { ITracker } from "../types";
import { BaseModel } from "./BaseModel";

export interface ICreateTracker extends Omit<ITracker, "_id"> { }

export class Tracker extends BaseModel<ITracker> implements ITracker {
    public static collectionName = "Tracker"
    public static create(createItem: ICreateTracker) {
        return ModelService.createModel(this, createItem);
    }
    public static findById(id: string | ObjectId) {
        return ModelService.getModel(this, id);
    }
    public static find(query: Partial<ITracker>) {
        return ModelService.findModel(this, query);
    }
    public latitude: number;
    public longitude: number;
    public animalId?: ObjectId;
    public userId: ObjectId;

    constructor(obj: { _id: ObjectId, latitude: number, longitude: number, animalId?: ObjectId, userId: ObjectId }) {
        super(obj._id, Tracker.collectionName);
        this.longitude = obj.longitude;
        this.latitude = obj.latitude;
        this.animalId = obj.animalId;
        this.userId = obj.userId;
    }

    public toObject(): ITracker {
        return {
            userId: this.userId,
            _id: this._id,
            longitude: this.longitude,
            latitude: this.latitude,
            animalId: this.animalId,
        }
    }

}