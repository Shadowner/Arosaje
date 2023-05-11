import { Body, Controller, Delete, Get, Patch, Path, Post, Request, Route, Security, Tags } from "tsoa";
import { Inject } from "typescript-ioc";
import { ExpressRequestWithUser } from '../interfaces/ExpressJwt';
import { Message } from "../models/message.model";

@Tags("Message")
@Route("message")
export class MessageController extends Controller {


    @Security("jwt", ["admin"])
    @Patch("{id}/update")
    public async update(@Body() content: string, @Path() id: number, @Request() request: ExpressRequestWithUser) {
        const user = request.user;
        const message = await Message.findOneBy({ id });
        if (!message) {
            throw new Error('Message not found');
        }

        if (message.author.id !== user.id) {
            throw new Error('You are not the author of this message');
        }

        message.content = content;
        await message.save();
    }

    @Security("jwt")
    @Delete("{id}")
    public async delete(@Path() id: number, @Request() request: ExpressRequestWithUser) {
        const user = request.user;
        const message = await Message.findOneBy({ id });
        if (!message) {
            throw new Error('Message not found');
        }

        if (message.author.id !== user.id) {
            throw new Error('You are not the author of this message');
        }

        await message.remove();
    }

    @Security("jwt")
    @Post("see/{id}")
    public async see(@Path() id: string) {
        //TODO: ???
    }

    @Security("jwt")
    @Get("{id}")
    public async fetchById(@Path() id: number, @Request() request: ExpressRequestWithUser) {
        const user = request.user;
        const message = await Message.findOneBy({ id });

        if (!message) {
            throw new Error('Message not found');
        }

        if (!user.conversations.find((conversation) => conversation.id === message.conversation.id)) {
            throw new Error('You are not in this conversation');
        }

        return message.toObject();
    }

    constructor() {
        super();
    }

}