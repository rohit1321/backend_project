// require('dontenv').config({paths:'.env'})



// import mongoose from "mongoose";
// import {DB_NAME} from "../constants.js";

import dotenv from "dotenv"
import connectDB from "./db/index.js";
// const  app = express()

dotenv.config({
    path:'./env'
})


connectDB()










/* approach to connect databae

import express from "express"
;{async()=>{// ; is used for a cleaning purpose
    try{
       await mongoose.connect(`${process.env.
        MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERROR:",error);
            throw error
        })

        app.listen(process.abort.env.PORT,()=>{
            console.log(`App is listening on $
            {process.env.PORT}`);
        })

    }
    catch(error){
        console.error("ERROR:",error)
        throw error
    }
}}{}
*/