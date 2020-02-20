import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";
import mongoose from 'mongoose';

process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});
process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});

const connectionUri: string = process.env.DB || "";
const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router); 
applyMiddleware(errorHandlers, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () => {
    mongoose.connect(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (!err) {
            console.log('Successfully Established Connection with MongoDB')
        }
        else {
            console.log('Failed to Establish Connection with MongoDB with Error: ' + err)
        }
    });
    console.log(`Server is running http://localhost:${PORT}...`)
});