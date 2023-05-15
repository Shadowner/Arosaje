import { Request as ExpressRequest } from "express";
import { Body, Controller, Delete, Get, Patch, Path, Post, Query, Request, Route, Security, Tags } from "tsoa";
import { Inject } from "typescript-ioc";
import { BaseEntity } from "../DTO/BaseEntity";
import { PlantCreate, PlantDTO } from "../DTO/PlantDTO";
import { ExpressRequestWithUser } from "../interfaces/ExpressJwt";
import { Plant } from "../models/plant.model";

@Tags("Plantes")
@Route("plant")
export class PlantController extends Controller {

    @Security("jwt")
    @Patch("update/{id}")
    public async update(@Path() id: number, @Body() updateObj: Partial<PlantCreate>, @Request() req: ExpressRequestWithUser) {
        const { user } = req.user;

        const plant = await Plant.findOneBy({ id });
        if (!plant) {
            throw new Error('Plante non trouvée');
        }

        if (plant.user.id !== user.id) {
            throw new Error('Vous n\'êtes pas le propriétaire de cette plante');
        }

        if (updateObj.name) plant.name = updateObj.name;
        if (updateObj.description) plant.description = updateObj.description;

        await plant.save();
        return plant.toObject();
    }

    @Security("jwt")
    @Delete("{id}")
    public async delete(@Path() id: number, @Request() req: ExpressRequestWithUser) {
        const { user } = req.user;

        const plant = await Plant.findOneBy({ id });
        if (!plant) {
            throw new Error('Plante non trouvée');
        }

        if (plant.user.id !== user.id) {
            throw new Error('Vous n\'êtes pas le propriétaire de cette plante ou vous n\'avez pas les droits pour la consulter');
        }

        await plant.remove();
    }

    @Security("jwt")
    @Get("{id}")
    public async fetchById(@Path() id: number, @Request() req: ExpressRequestWithUser) {
        const { user } = req.user;

        const plant = await Plant.findOneBy({ id });
        if (!plant) {
            throw new Error('Plante non trouvée');
        }

        if (plant.guards.find(guard => guard.guardianUser.id === user.id)) {
            return plant.toObject();
        } else if (plant.user.id !== user.id) {
            throw new Error('Vous n\'êtes pas le propriétaire de cette plante ou vous n\'avez pas les droits pour la consulter');
        }

        return plant.toObject();
    }

    @Get("public/all")
    public async fetchAllPublic() {
        const plants = await Plant.find();
        return plants.map(plant => plant.toObject());
    }

    @Security("jwt")
    @Get("get/all")
    public async fetchAll(@Request() req: ExpressRequestWithUser) {
        const { user } = req.user;
        const plants = user.plants;
        return plants.map(plant => plant.toObject());
    }

    @Get("query")
    public async query(@Query() max?: number, @Query() search?: string, @Query() lastId?: string) {
        const query = Plant.createQueryBuilder("plant");
        if (max) {
            query.limit(max);
        }
        if (search) {
            query.where("plant.name LIKE :search", { search: `%${search}%` });
        }
        if (lastId) {
            query.where("plant.id < :lastId", { lastId });
        }
        const plants = await query.getMany();
        return plants.map(plant => plant.toObject());
    }

    @Security("jwt")
    @Post("create")
    public async create(@Body() plant: PlantCreate, @Request() req: ExpressRequestWithUser) {
        const { user } = req.user;

        const test = new Plant();
        test.name = plant.name;
        test.description = plant.description;
        test.size = Number(plant.size);
        test.plantType = plant.type;
        test.user = user;
        await test.save();

        return test.toObject();
    }

    constructor() {
        super();
    }

}