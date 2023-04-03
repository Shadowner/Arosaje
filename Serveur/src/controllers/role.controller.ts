import { Request as ExpressRequest } from "express";
import { Body, Controller, Delete, Get, Patch, Path, Post, Request, Route, Security, Tags } from "tsoa";
import { Inject } from "typescript-ioc";
import { BaseEntity } from "../DTO/BaseEntity";
import { RoleDTO } from "../DTO/RoleDTO";
import { RoleService } from "../services/role.service";

@Tags("Role")
@Route("role")
export class RoleController extends Controller {

    @Inject
    private roleService!: RoleService;

    @Security("jwt", ["role_edition"])
    @Patch("update")
    public async update(@Body() updateObj: Partial<Omit<RoleDTO, keyof (BaseEntity)>>) {

    }

    @Security("jwt", ["role_deletion"])
    @Delete("{id}")
    public async delete(@Path() id: string) {

    }

    @Security("jwt")
    @Get("{id}")
    public async fetchById(@Path() id: string) {

    }

    @Get("public/all")
    public async fetchAllPublic(): Promise<Partial<Omit<RoleDTO, keyof (BaseEntity) | 'flags'>>> {
        return {
            "name": 'coucou'
        }
    }

    @Security("jwt")
    @Get("all")
    public async fetchAll(): Promise<RoleDTO[]> {
        return [];
    }

    constructor() {
        super();
    }

}