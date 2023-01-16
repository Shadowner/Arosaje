import { IAnimal, IAgricoleStat, ZONE_TYPE, IPoint } from "../types";
import { ObjectId } from "mongodb";
import { BaseModel } from "./BaseModel";
import { ModelService } from '../services/ModelService';

export interface ICreateAgricoleStat extends Omit<IAgricoleStat,
    "points" |
    "speciesId" |
    "animalsId" |
    "agricoleStatId"> { }
export class AgricoleStat extends BaseModel<IAgricoleStat> implements IAgricoleStat {
    public static collectionName = "Zone";
    public static create(createItem: IAgricoleStat) {
        return ModelService.createModel(this, createItem);
    }
    public static findById(id: string | ObjectId) {
        return ModelService.getModel(this, id);
    }
    public static find(query: Partial<AgricoleStat>) {
        return ModelService.findModel(this, query);
    }

    public humidity: number;
    public sun: number;
    public airPurity: number;
    public lastRecolt: Date;
    public lastProduit: string;
    public typeAgriculture: string;
    public vegetable: string;
    public userId: ObjectId;

    constructor(obj: IAgricoleStat) {
        super(obj._id, 'AgricoleStat');
        this.humidity = obj.humidity;
        this.sun = obj.sun;
        this.airPurity = obj.airPurity;
        this.lastRecolt = obj.lastRecolt;
        this.lastProduit = obj.lastProduit;
        this.typeAgriculture = obj.typeAgriculture;
        this.vegetable = obj.vegetable;
        this.userId = obj.userId;
    }


    public toObject(): IAgricoleStat {
        return {
            _id: this._id,
            humidity: this.humidity,
            sun: this.sun,
            airPurity: this.airPurity,
            lastRecolt: this.lastRecolt,
            lastProduit: this.lastProduit,
            typeAgriculture: this.typeAgriculture,
            vegetable: this.vegetable,
            userId: this.userId,
        }
    }



}
