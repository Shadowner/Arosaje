import { Request as ExpressRequest } from "express";
import { Body, Controller, Delete, Inject, Patch, Post, Request, Route, Security } from "tsoa";
import { BaseEntity } from "../dto/BaseEntity";
import { UserDTO } from "../dto/UserDTO";

export interface ILoginCredentials {
    password: string,
    username: string
}

@Route("user")
export class UserController extends Controller {

    @Post("login")
    public async login(@Body() credential: ILoginCredentials) {

    }

    @Post("logout")
    public async logour(@Request() request: ExpressRequest) {

    }


    @Security("jwt")
    @Patch("update")
    public async update(@Body() updateObj: Partial<Omit<UserDTO, keyof (BaseEntity)>>) {

    }

    @Security("jwt")
    @Delete("delete")
    public async delete(@Request() request: ExpressRequest) {

    }

    @Security("jwt")
    @Delete("fetch")
    public async fetch(@Request() request: ExpressRequest) {

    }

    constructor() {
        super();
    }

}