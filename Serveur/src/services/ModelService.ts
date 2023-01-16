/**
 * S'occupe de récupérer les élements en base de données 
 * et de les transformer en enfant de models.
 * 
 * AnimalController -> ModelService (Animal) -> Requête MongoDB -> ObjectAnimal (le json déjà parsé)
 * 
 * ModuleService -> Transforme en instance de son model (ModelAnimal) -> qui le retourne au controller.
 * 
 */

/**
 * S'occupe de récupérer les élements en base de données 
 * et de les transformer en enfant de models.
 * 
 * AnimalController -> ModelService (Animal) -> Requête MongoDB -> ObjectAnimal (le json déjà parsé)
 * 
 * ModuleService -> Transforme en instance de son model (ModelAnimal) -> qui le retourne au controller.
 * 
 */
import { ObjectId } from "mongodb";
import { BaseModel } from "../models/BaseModel";
import { DatabaseService } from "./DatabaseService";

interface Constructor<T> {
    new(...args: any[]): T,
    collectionName: string,
}

export class ModelService {
    public static async getModel<T extends BaseModel<T>>(classConstructor: Constructor<T>, _id: string | ObjectId): Promise<T | null> {
        const document = await DatabaseService.getCollection(classConstructor.collectionName).findOne({ _id });
        if (!document) return null;
        return new classConstructor(document);
    }

    public static async findModel<T extends BaseModel<T>>(classConstructor: Constructor<T>, query: any): Promise<T[]> {
        const documents = await DatabaseService.getCollection(classConstructor.collectionName).find(query).toArray();
        console.log(documents)
        if (documents.length == 0) return [];
        return documents.map(x => new classConstructor(x));
    }


    public static async createModel<T extends BaseModel<T>>(classConstructor: Constructor<T>, createItem: any): Promise<T | null> {
        const collection = DatabaseService.getCollection(classConstructor.collectionName);
        const response = await collection.insertOne(createItem);
        if (!response) return null;
        return new classConstructor({ ...createItem, _id: response.insertedId });
    }
}
