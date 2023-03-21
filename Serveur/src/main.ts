import express from "express";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import { Server } from "socket.io";
import { createServer as createHttpServer } from "http";
import cors from "cors";
import { RegisterRoutes } from "./routers/routes";
import { createServer } from "https";
import { readFileSync } from "fs";
import { AppDataSource } from "./config/data-source";

const privateKey = readFileSync(`${__dirname}/../cert/privatekey.key`, 'utf8');
const certificate = readFileSync(`${__dirname}/../cert/localhost.crt`, 'utf8');
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

    // Establish database connection
    AppDataSource
        .initialize()
        .then(() => {
            console.log("Data Source has been initialized!")
        })
        .catch((err) => {
            console.error("Error during Data Source initialization:", err)
    })

    // Express
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

    // Run server
    server.listen(PORT);
    httpsServer.listen(4443)


export default io;