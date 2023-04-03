import { Request as ExpressRequest } from "express";
import { Body, Controller, Delete, Get, Patch, Path, Post, Request, Route, Security, Tags } from "tsoa";
import { Inject } from "typescript-ioc";
import { BaseEntity } from "../DTO/BaseEntity";
import { ConversationDTO } from "../DTO/ConversationDTO";
import { MessageDTO } from "../DTO/MessageDTO";
import { ConversationService } from "../services/conversation.service";

@Tags("Conversation")
@Route("conversation")
export class ConversationController extends Controller {

    @Inject
    private conversationService!: ConversationService;

    @Security("jwt")
    @Patch("update")
    public async update(@Body() updateObj: Partial<Omit<ConversationDTO, keyof (BaseEntity)>>) {
        //TODO : Vérifier perm si pas son conversation
    }

    @Security("jwt")
    @Delete("{id}/delete")
    public async delete(@Path() id: string) {
        //TODO : Vérifier perm si créateur

    }

    @Security("jwt")
    @Get("{id}")
    public async fetchById(@Path() id: string) {
        //TODO : Vérifier perm fetch l'id

    }

    @Security("jwt")
    @Post("{id}/message/send")
    public async sendNewMessage(@Path() id: string, @Body() messageDTO: MessageDTO) {
        //TODO : Vérifier perm fetch l'id

    }

    constructor() {
        super();
    }

}