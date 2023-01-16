import { IAnimal } from '../types';
import { ObjectId } from "mongodb";
import { BaseModel } from "./BaseModel";
import { ModelService } from '../services/ModelService';
import { DatabaseService } from '../services/DatabaseService';


export interface ICreateAnimal extends Omit<IAnimal,
    '_id' |
    'trackerID'
> { }
export class Animal extends BaseModel<IAnimal> implements IAnimal {
    public static collectionName = "Animal";
    public static create(createItem: ICreateAnimal) {
        return ModelService.createModel(this, createItem);
    }
    public static findById(id: string | ObjectId) {
        return ModelService.getModel(this, id);
    }
    public static find(query: Partial<IAnimal>) {
        return ModelService.findModel(this, query);

    }

    public name: string;
    public birthdate: Date;
    public userID: ObjectId;
    public trackerID?: ObjectId;
    public speciesID: ObjectId;
    public description: string;

    constructor(obj: { _id: ObjectId, description: string, name: string, birthdate: Date, speciesID: ObjectId, userID: ObjectId, trackerID?: ObjectId }) {
        super(obj._id, Animal.collectionName);
        this.name = obj.name;
        this.birthdate = obj.birthdate;
        this.speciesID = obj.speciesID;
        this.userID = obj.userID;
        this.trackerID = obj.trackerID;
        this.description = obj.description;
    }

    public toObject(): IAnimal {
        return {
            _id: this._id,
            name: this.name,
            birthdate: this.birthdate,
            speciesID: this.speciesID,
            userID: this.userID,
            trackerID: this.trackerID,
            description: this.description,
        }
    }
}
