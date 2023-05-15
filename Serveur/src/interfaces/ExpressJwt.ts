import { User } from "../models/user.model";
import { Request } from "express";
import { JWT_TYPE } from '../services/jwt.service';

export type ExpressRequestWithUser = Request & { user: { user: User, jwtType: JWT_TYPE } };