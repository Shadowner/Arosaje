import { BaseModel } from "./BaseModel";
import { ObjectId } from "mongodb";
import { ModelService } from "../services/ModelService";
import { Security } from "../util/Security";
import { UserDTO } from "../dto/UserDTO";
import { ConversationDTO } from "../dto/ConversationDTO";
import { FileDTO } from "../dto/FileDTO";
import { PlantDTO } from "../dto/PlantDTO";
import { RoleDTO } from "../dto/RoleDTO";

export interface ICreateUser extends Omit<UserDTO,
    "_id" |
    "zonesId" |
    "animalsId" |
    "trackersId" |
    "photoUrl"> { }
export class User extends BaseModel<UserDTO> implements UserDTO {
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
        this.photoUrl = obj.photoUrl;
        this.zonesId = obj.zonesId;
        this.animalsId = obj.animalsId;
        this.trackersId = obj.trackersId;
        this.password = obj.password;
    }

    birthdate!: Date;
    mail!: string;
    phone!: string;
    address!: string;
    city!: string;
    country!: string;
    avatar!: FileDTO;
    files!: FileDTO[];
    conversations!: ConversationDTO[];
    plants!: PlantDTO[];
    roles!: RoleDTO[];
    last_connection!: Date;
    id!: number;

    public toObject(): UserDTO {
        throw new Error("Not implemented")
    }
}