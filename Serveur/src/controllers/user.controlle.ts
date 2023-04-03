import { Request as ExpressRequest } from "express";
import { Body, Controller, Delete, Patch, Path, Post, Request, Route, Security, Tags } from "tsoa";
import { Inject } from "typescript-ioc";
import { BaseEntity } from "../DTO/BaseEntity";
import { UserDTO } from "../DTO/UserDTO";
import { UserService } from "../services/user.service";

export interface ILoginCredentials {
    password: string,
    username: string
}

@Tags("Utilisateur")
@Route("user")
export class UserController extends Controller {

    @Inject
    private userService!: UserService;

    @Post("login")
    public async login(@Body() credential: ILoginCredentials) {
        this.userService.test();
    }

    @Post("logout")
    public async logout(@Request() request: ExpressRequest) {

    }


    @Security("jwt")
    @Patch("update")
    public async update(@Body() updateObj: Partial<Omit<UserDTO, keyof (BaseEntity)>>) {

    }

    @Security("jwt")
    @Delete("{id}")
    public async delete(@Path() id: string) {

    }

    constructor() {
        super();
    }

}