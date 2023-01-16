import express from "express";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import { Server } from "socket.io";
import { createServer as createHttpServer } from "http";
import { DatabaseService } from "./services/DatabaseService";
import cors from "cors";
import { Animal } from './models/Animal';
import { Species } from './models/Species';
import { User } from './models/User';
import { RegisterRoutes } from "./routers/routes";
import { Tracker } from './models/Tracker';
import { createServer } from "https";
import { readFileSync } from "fs";

const privateKey = readFileSync(`${__dirname}/../privatekey.key`, 'utf8');
const certificate = readFileSync(`${__dirname}/../localhost.crt`, 'utf8');
const credentials = { key: privateKey, cert: certificate };
const app = express();
const server = createHttpServer(app);
const httpsServer = createServer(credentials, app)
const io = new Server(server, {
    "cors": {
        origin: '*'
    }
});

const PORT = process.env.PORT || 8000;

(async () => {
    await DatabaseService.init();

    const species = (await Species.find({ name: "Vache" }))[0] || await Species.create({
        "icon": "noto:cow",
        "name": "Vache"
    });
    console.log(species);
    if (!species) return;

    const human = (await Species.find({ name: "Humain" }))[0] || await Species.create({
        "icon": "noto-v1:beaming-face-with-smiling-eyes",
        "name": "Humain"
    });
    if (!human) return;

    const user = (await User.find({ username: "shado" }))[0] || await User.create({
        "firstname": "Lucas",
        "lastname": "Coucou",
        "password": "1",
        "username": "shado"
    });
    if (!user) return;

    const wissem = (await Animal.find({ name: "Wissem" }))[0] || await Animal.create({
        name: "Wissem",
        "birthdate": new Date("6/08/2014"),
        "description": "Jeune humain qui est vraiment spécial.",
        //@ts-ignore
        "speciesID": human._id.toString(),
        //@ts-ignore
        "userID": user._id.toString(),
    });
    // @ts-ignore
    const wissemTracker = (await Tracker.find({ "animalId": wissem._id.toString() }))[0] || await Tracker.create({
        //@ts-ignore
        "animalId": wissem._id.toString(),
        //@ts-ignore
        "userId": user._id.toString(),
        "latitude": 0,
        "longitude": 0
    })
    //@ts-ignore
    wissemTracker.animalId = wissem._id.toString();
    //@ts-ignore
    wissem.trackerID = wissemTracker._id.toString();
    await wissem.update();
    await wissemTracker.update();
    if (!user.trackersId || !user.trackersId.includes(wissemTracker._id)) {
        if (!user.trackersId) user.trackersId = [];
        //@ts-ignore
        user.trackersId.push(wissemTracker._id.toString());
        await user.update();
    }

    // console.log(wissemTracker);
    app.disable('etag');
    app.use(cors())
    app.use(express.json())
    app.use(morgan("tiny"));
    app.use(express.static("public"));
    RegisterRoutes(app);

    app.use(
        "/docs",
        swaggerUi.serve,
        swaggerUi.setup(undefined, {
            swaggerOptions: {
                url: "/swagger.json",
            },
        })
    );

    io.on("connection", () => {
        console.log("Nouvelle connection");
    });

    server.listen(PORT);
    httpsServer.listen(4443)

})()

export default io;
// import { MongoClient } from "mongodb";

// const DATABASE_URL = "mongodb://localhost:27017/test";

// (async () => {

//     const client = await MongoClient.connect(DATABASE_URL);
//     const db = client.db("test");

//     console.log(await db.collections());

// })()
