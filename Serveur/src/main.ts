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
import { ValidateError } from "tsoa";
import { initialisation } from "./config/init";

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


const PORT = process.env.PORT || 8080;

// Establish database connection
AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        initialisation();
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

app.use((
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    if (err instanceof ValidateError) {
        console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
        return res.status(422).json({
            message: "Validation Failed",
            details: err?.fields,
        });
    }

    if (err instanceof Error) {
        return res.status(500).json({
            message: err.message,
            name: err.name,
        });
    }

    next();
})

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
