import { Request, Response } from "express";
import express from 'express';

export class BaseRouter {

    public baseRouter;

    constructor(basePath: string, basicHandler?: (res: Response, req: Request) => void) {
        this.baseRouter = express.Router();

        if (basicHandler) this.baseRouter.get(basePath, basicHandler);
    }
}