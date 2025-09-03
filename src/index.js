import dotenv from 'dotenv';
dotenv.config({path:'./.env'});

import connectDB from './db/index.js';

connectDB();









/*
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";

const port = process.env.PORT;
const dbUri = process.env.DB_URI;

import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${dbUri}/${DB_NAME}`)

        app.on("Error", (error)=> {
            console.log("ERROR :", error)
            throw error
        })

        app.listen(port, () => {
            console.log(`App is listening on port ${port}`)
        })
    }
    catch(error) {
        console.error("ERROR :", error)
        throw error
    }
    
}) ()
*/