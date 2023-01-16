import { ISpecies, IZone } from '../types';
import { BaseModel } from "./BaseModel";
import { ObjectId } from "mongodb";
import { ModelService } from "../services/ModelService";


export interface ICreateSpecies extends Omit<ISpecies, "_id"> { };

export class Species extends BaseModel<ISpecies> implements ISpecies {
    public static collectionName = "Species";
    public static create(createItem: ICreateSpecies) {
        return ModelService.createModel(this, createItem);
    }
    public static findById(id: string | ObjectId) {
        return ModelService.getModel(this, id);
    }
    public static find(query: Record<string, string>) {
        return ModelService.findModel(this, query);
    }

    public name: string;
    public icon: string;

    constructor(obj: { _id: ObjectId, name: string, icon: string }) {
        super(obj._id, Species.collectionName);
        this.name = obj.name;
        this.icon = obj.icon;
    }

    public toObject(): ISpecies {
        return {
            icon: this.icon,
            name: this.name,
            _id: this._id,
        }
    }
}
