import mongoose from "mongoose";

// const mongoose = require(mongoose);
// mongoose.connect('mongodb://127.0.0.1:27017/user-db');


const DBConnection = async () => {
    const MONGODB_URI = 'mongodb://aditi_pandey:MongoDB1406@file-sharing-shard-00-00.uphas.mongodb.net:27017,file-sharing-shard-00-01.uphas.mongodb.net:27017,file-sharing-shard-00-02.uphas.mongodb.net:27017/?ssl=true&replicaSet=atlas-6w3aat-shard-0&authSource=admin&retryWrites=true&w=majority&appName=file-sharing';
    try{
        await mongoose.connect(MONGODB_URI, { useNewUrlParser : true});
        console.log("Database connected successfully.");
    } catch(error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default DBConnection;