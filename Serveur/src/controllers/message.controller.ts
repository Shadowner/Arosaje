import { Request as ExpressRequest } from "express";
import { Body, Controller, Delete, Get, Patch, Path, Post, Request, Route, Security, Tags } from "tsoa";
import { Inject } from "typescript-ioc";
import { BaseEntity } from "../DTO/BaseEntity";
import { MessageDTO } from "../DTO/MessageDTO";
import { ConversationService } from "../services/conversation.service";
import { MessageService } from "../services/message.service";

@Tags("Message")
@Route("message")
export class MessageController extends Controller {

    @Inject
    private messageService!: MessageService;

    @Inject
    private conversationService!: ConversationService;

    @Security("jwt")
    @Patch("update")
    public async update(@Body() updateObj: Partial<Omit<MessageDTO, keyof (BaseEntity)>>) {
        //TODO : Vérifier perm si pas son message
    }

    @Security("jwt")
    @Delete("{id}")
    public async delete(@Path() id: string) {
        //TODO : Vérifier perm si pas son message

    }

    @Security("jwt")
    @Post("see/{id}")
    public async see(@Path() id: string) {
        //TODO : Vérifier perm si pas son message

    }

    @Security("jwt")
    @Get("{id}")
    public async fetchById(@Path() id: string) {

    }

    constructor() {
        super();
    }

}