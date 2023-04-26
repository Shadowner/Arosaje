import { Request as ExpressRequest } from "express";
import { Body, Controller, Delete, FormField, Get, Patch, Path, Post, Query, Request, Route, Security, Tags, UploadedFile, UploadedFiles } from "tsoa";
import { Inject } from "typescript-ioc";
import { BaseEntity } from "../DTO/BaseEntity";
import { FileDTO } from "../DTO/FileDTO";
import { User } from '../models/user.model';
import { Role } from '../models/role.model';
import { RoleType } from "../interfaces/BasicRoleType";

@Tags("Botanistes")
@Route("botaniste")
export class BotanisteController extends Controller {

    @Security("jwt")
    @Get("query")
    public async query(@Query() query?: string, @Query() lastId?: number, @Query() max?: number) {
        const querySelector = User.createQueryBuilder();
        const botanisteRole = await Role.findOneBy({ name: RoleType.BOTANISTE });
        querySelector.relation(User, "roles").of(botanisteRole);

        return (await querySelector.getMany()).map(user => user.publicUserObject());
    }

    constructor() {
        super();
    }

}