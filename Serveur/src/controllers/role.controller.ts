import { Request as ExpressRequest } from "express";
import { Body, Controller, Delete, Get, Patch, Path, Post, Request, Route, Security, Tags } from "tsoa";
import { Inject } from "typescript-ioc";
import { BaseEntity } from "../DTO/BaseEntity";
import { RoleDTO } from "../DTO/RoleDTO";
import { Role } from '../models/role.model';

@Tags("Role")
@Route("role")
export class RoleController extends Controller {

    @Security("jwt", ["admin"])
    @Patch("update")
    public async update(@Body() updateObj: Partial<Omit<RoleDTO, keyof (BaseEntity)>>) {

    }

    @Security("jwt", ["admin"])
    @Delete("{id}")
    public async delete(@Path() id: string) {

    }

    @Security("jwt")
    @Get("{id}")
    public async fetchById(@Path() id: string) {

    }

    @Get("public/all")
    public async fetchAllPublic(): Promise<{
        id: number;
        name: string;
    }[]> {
        return (await Role.find({})).map((role) => role.toObject());

    }

    @Get("all")
    public async fetchAll(): Promise<{
        id: number;
        name: string;
    }[]> {
        console.log("fetching all roles");
        return (await Role.find({})).map((role) => role.toObject());
    }

    constructor() {
        super();
    }

}