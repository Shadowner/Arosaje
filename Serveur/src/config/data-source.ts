import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv";
import { Plant } from "../models/plant.model";
import { Role } from "../models/role.model";
import { User } from "../models/user.model"
import { File } from "../models/file.model"
import { PlantType } from "../models/plantType.model";
import { Guard } from "../models/guard.model";
import { Session } from "../models/session.model";
import { Conversation } from "../models/conversation.model";
import { Message } from "../models/message.model";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User, Role, Plant, File, PlantType, Guard, Session, Conversation, Message],
  subscribers: [],
  migrations: [],
});