import "reflect-metadata"
import { DataSource } from "typeorm"
import { Plant } from "../models/plant.model";
import { Role } from "../models/role.model";
import { User } from "../models/user.model"
import { File } from "../models/file.model"
import { PlantType } from "../models/plant-type.model";
import { Guard } from "../models/guard.model";
import { Session } from "../models/session.model";
import { Conversation } from "../models/conversation.model";
import { Message } from "../models/message.model";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "mspr_dev",
  synchronize: true,
  logging: true,
  entities: [User, Role, Plant, File, PlantType, Guard, Session, Conversation, Message],
  subscribers: [],
  migrations: [],
});