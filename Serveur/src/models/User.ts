import { IUser } from "../types";
import { BaseModel } from "./BaseModel";
import { ObjectId } from "mongodb";
import { ICreateTracker } from './Tracker';
import { ModelService } from "../services/ModelService";
import { Security } from "../util/Security";

export interface ICreateUser extends Omit<IUser,
    "_id" |
    "zonesId" |
    "animalsId" |
    "trackersId" |
    "photoUrl"> { }
export class User extends BaseModel<IUser> implements IUser {
    public static collectionName = "User";
    public static async create(createItem: ICreateUser) {
        console.log("Création de l'utilisateur", createItem)
        createItem.password = await Security.hashPasword(createItem.password);
        return await ModelService.createModel(this, { ...createItem, animalsId: [], zonesId: [], trackersId: [] });
    }
    public static async findById(id: string | ObjectId) {
        return await ModelService.getModel(this, id);
    }
    public static async find(query: Record<string, string>) {
        return await ModelService.findModel(this, query);
    }
    public firstname: string;
    public email: string;
    public username: string;
    public password: string;
    public lastname: string;
    public birthdate: string;
    public photoUrl: string;
    public zonesId: ObjectId[];
    public animalsId: ObjectId[];
    public trackersId: ObjectId[];

    constructor(obj: { _id: ObjectId, username: string, email: string, password: string, firstname: string, lastname: string, birthdate: string, photoUrl: string, zonesId: ObjectId[], animalsId: ObjectId[], trackersId: ObjectId[] }) {
        super(obj._id, User.collectionName);
        this.username = obj.username;
        this.email = obj.email;
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
        this.birthdate = obj.birthdate;
        this.photoUrl = obj.photoUrl;
        this.zonesId = obj.zonesId;
        this.animalsId = obj.animalsId;
        this.trackersId = obj.trackersId;
        this.password = obj.password;
    }

    public toObject(): IUser {
        return {
            _id: this._id,
            username: this.username,
            firstname: this.firstname,
            lastname: this.lastname,
            zonesId: this.zonesId,
            animalsId: this.animalsId,
            trackersId: this.trackersId,
            password: this.password,
        }
    }
}