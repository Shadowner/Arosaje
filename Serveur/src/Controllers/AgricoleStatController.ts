import { ICreateAnimal, Animal } from '../models/Animal';
import { Body, Delete, Get, Patch, Path, Post, Route, Tags, Controller } from 'tsoa';
import { IAnimal, IAgricoleStat } from '../types';
import io from '../main';
import { ObjectId } from 'mongodb';
import { cp } from 'fs';
import { Zone } from '../models/Zone';
import { AgricoleStat } from '../models/AgricoleStat';

@Route("agricole")
@Tags("Agricole Stat")
export class PlantesController extends Controller {

    public routeName = "plants"

    @Get("/user/{userId}")
    public async gets(@Path() userId: string): Promise<IAgricoleStat[]> {
        const agriStat = await AgricoleStat.find({ userId: ObjectId.createFromHexString(userId) });
        return agriStat.map(x => x.toObject());
    }

    @Get("/zone/{zoneId}")
    public async getByZone(@Path() zoneId: string): Promise<IAgricoleStat> {
        const zone = await Zone.findById(zoneId);
        if (!zone) throw new Error("ahah");
        if (!zone.agricoleStatId) throw new Error("Y a pas d'agricole stat ici");

        const agri = await AgricoleStat.findById(zone.agricoleStatId);
        if (!agri) throw new Error("Nique zebi");

        return agri.toObject();
    }

    @Patch("/update")
    public async update(@Body() updateObject: Partial<IAgricoleStat> & { _id: string }): Promise<IAgricoleStat> {
        const agri = await AgricoleStat.findById(updateObject._id);
        if (!agri) { throw console.error("erreur"); }
        for (const key in updateObject) {
            //@ts-ignore
            agri[key] = updateObject[key];
        }
        await agri.update();
        io.emit("agri:update", updateObject._id, updateObject);
        return agri.toObject();
    }
    constructor() { super() }
}