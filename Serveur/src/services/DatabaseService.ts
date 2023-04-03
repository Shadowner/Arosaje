import { MongoClient, Db, Collection } from "mongodb";

export class DatabaseService {
    public static client: MongoClient;
    public static db: Db;

    public static DatabaseURL = "mongodb://localhost:27017";
    public static DatabaseName = "Animalia";

    public static async init() {
        this.client = new MongoClient(this.DatabaseURL);
        this.db = await this.client.db(this.DatabaseName);
    }

    public static getCollection(collectionName: string): Collection {
        return this.db.collection(collectionName);
    }
}