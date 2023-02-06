import { ObjectId } from "mongodb";
import { BaseEntity } from "../dto/BaseEntity";
import { DatabaseService } from "../services/DatabaseService";
import { ModelService } from '../services/ModelService';
export abstract class BaseModel<T extends BaseEntity> {
    public readonly _id: ObjectId;

    private collectionName: string;

    public async update() {
        const variables = this.getVariables();
        console.log("Voici la collection :", this.collectionName);
        const x = DatabaseService.getCollection(this.collectionName);
        await x.updateOne({ _id: this._id }, { $set: this.toObject() });
        return this;
    }

    public getVariables() {
        let res: Record<string, any> = {}
        for (const entry of Object.entries(this)) {
            const key = entry[0];
            const item = entry[1]
            if (typeof item != "function") {
                res[key] = item;
            }
        }
        return res;
    }

    public async delete() {
        const query = { _id: this._id };
        const x = DatabaseService.getCollection(this.collectionName);
        await x.deleteOne(query);
    }

    constructor(_id: ObjectId, collectionName: string) {
        this._id = _id;
        this.collectionName = collectionName;
    }

    public abstract toObject(): any;


}