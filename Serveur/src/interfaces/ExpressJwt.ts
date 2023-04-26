import { User } from "../models/user.model";
import { Request } from "express";

export type ExpressRequestWithUser = Request & { user: User };