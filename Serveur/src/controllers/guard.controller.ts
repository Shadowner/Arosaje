import { Request as ExpressRequest } from "express";
import { Body, Controller, Delete, FormField, Get, Patch, Path, Post, Request, Route, Security, Tags, UploadedFile, UploadedFiles } from "tsoa";
import { Inject } from "typescript-ioc";
import { BaseEntity } from "../DTO/BaseEntity";
import { FileDTO } from "../DTO/FileDTO";

@Tags("Guarding")
@Route("guard")
export class GuardController extends Controller {

    @Security("jwt")
    @Get("start/{id}")
    public async fetchAll(): Promise<FileDTO[]> {
        return [];
    }

    constructor() {
        super();
    }

}