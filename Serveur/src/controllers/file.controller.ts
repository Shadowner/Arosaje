import { Request as ExpressRequest } from "express";
import { Body, Controller, Delete, FormField, Get, Patch, Path, Post, Request, Route, Security, Tags, UploadedFile, UploadedFiles } from "tsoa";
import { Inject } from "typescript-ioc";
import { BaseEntity } from "../DTO/BaseEntity";
import { FileDTO } from "../DTO/FileDTO";

@Tags("File")
@Route("file")
export class FileController extends Controller {

    @Security("jwt", ["file_edition"])
    @Patch("update")
    public async update(@Body() updateObj: Partial<Omit<FileDTO, keyof (BaseEntity)>>) {

    }

    @Security("jwt")
    @Post("upload")
    public async upload(
        @FormField() title: string,
        @FormField() description: string,
        @UploadedFiles() files: Express.Multer.File[],
        @UploadedFile() file: Express.Multer.File,) {


    }

    @Security("jwt", ["file_deletion"])
    @Delete("{id}/delete")
    public async delete(@Path() id: string) {

    }

    @Security("jwt")
    @Get("{id}")
    public async fetchById(@Path() id: string) {

    }

    @Get("public/all")
    public async fetchAllPublic(): Promise<Partial<Omit<FileDTO, keyof (BaseEntity) | 'flags'>>> {
        return {
            "name": 'coucou'
        }
    }

    @Security("jwt")
    @Get("all")
    public async fetchAll(): Promise<FileDTO[]> {
        return [];
    }

    constructor() {
        super();
    }

}