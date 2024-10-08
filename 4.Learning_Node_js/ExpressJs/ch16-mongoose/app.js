//import mongoose
import mongoose from 'mongoose';
import express from 'express';
const app = express()
const port = process.env.PORT || '3000';

// using object is a better way
// const DATABASE_URL = process.env.DATABASE_URL ||  "mongodb://ajinkya:123456@localhost:27017/schooldatabase?authSource=schooldatabase"

const DATABASE_URL = process.env.DATABASE_URL ||  "mongodb://localhost:27017"


import { connectdb } from './db/connectdb.js';
connectdb(DATABASE_URL)

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})


