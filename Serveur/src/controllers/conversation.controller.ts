import { ExpressRequestWithUser } from "../interfaces/ExpressJwt";
import { Conversation } from "../models/conversation.model";
import { Body, Controller, Delete, Get, Middlewares, Patch, Path, Post, Request, Route, Security, Tags } from "tsoa";
import { Inject } from "typescript-ioc";
import { Response } from "express";
import { Message } from "../models/message.model";

function testMiddleWare(request: ExpressRequestWithUser, res: Response, next: () => Promise<any>) {
    console.log('Je suis un middleware');
    next();
}
@Tags("Conversation")
@Route("conversation")
export class ConversationController extends Controller {

    @Security("jwt")
    @Delete("{id}/delete")
    public async delete(@Path() id: string) {
        //TODO : Vérifier perm si créateur

    }

    @Middlewares(testMiddleWare)
    @Security("jwt")
    @Get("{id}")
    public async fetchById(@Path() id: number, @Request() request: ExpressRequestWithUser) {
        const user = request.user;

        if (!user.conversations.find((conversation: Conversation) => conversation.id === id)) {
            throw new Error('You are not in this conversation');
        }

        const conversation = await Conversation.findOneBy({ id });
        if (!conversation) {
            throw new Error('Conversation not found');
        }

        return conversation.toObject();
    }

    @Security("jwt")
    @Post("{id}/message/send")
    public async sendNewMessage(@Path() id: number, @Body() content: { content: string }, @Request() request: ExpressRequestWithUser) {
        const user = request.user;

        if (!user.conversations.find((conversation: Conversation) => conversation.id === id)) {
            throw new Error('You are not in this conversation');
        }

        const conversation = await Conversation.findOneBy({ id });
        if (!conversation) {
            throw new Error('Conversation not found');
        }

        const message = new Message();
        message.content = content.content;
        message.author = user;
        message.conversation = conversation;
        await message.save();

        return message.toObject();
    }

    constructor() {
        super();
    }

}