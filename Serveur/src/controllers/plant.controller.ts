import { Request as ExpressRequest } from "express";
import { Body, Controller, Delete, Get, Patch, Path, Post, Query, Request, Route, Security, Tags } from "tsoa";
import { Inject } from "typescript-ioc";
import { BaseEntity } from "../DTO/BaseEntity";
import { PlantDTO } from "../DTO/PlantDTO";
import { PlantService } from "../services/plant.service";

@Tags("Plantes")
@Route("plant")
export class PlantController extends Controller {

    @Inject
    private plantService!: PlantService;

    @Security("jwt")
    @Patch("update")
    public async update(@Body() updateObj: Partial<Omit<PlantDTO, keyof (BaseEntity)>>) {
        //TODO : Vérifier perm si sa plante ou a les droits

    }

    @Security("jwt")
    @Delete("{id}")
    public async delete(@Path() id: string) {
        //TODO : Vérifier perm si sa plante ou a les droits

    }

    @Security("jwt")
    @Get("{id}")
    public async fetchById(@Path() id: string) {
        //TODO : Vérifier si plante privé

    }

    @Get("public/all")
    public async fetchAllPublic(): Promise<Partial<Omit<PlantDTO, keyof (BaseEntity) | 'flags'>>> {
        return {
            "name": 'coucou'
        }
    }

    @Security("jwt")
    @Get("all")
    public async fetchAll(): Promise<PlantDTO[]> {
        return [];
    }

    @Get("query")
    public async query(@Query() max?: number, @Query() search?: string, @Query() lastId?: string): Promise<PlantDTO[]> {
        return [];
    }


    constructor() {
        super();
    }

}