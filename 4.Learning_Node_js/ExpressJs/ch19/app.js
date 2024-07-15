//import mongoose
import mongoose from 'mongoose';
import express from 'express';
const app = express()
const port = process.env.PORT || '3000';

// import './models/Student.js'
import { createDoc } from './models/Student.js';
const DATABASE_URL = process.env.DATABASE_URL ||  "mongodb://localhost:27017"


import { connectdb } from './db/connectdb.js';
connectdb(DATABASE_URL)

// create and save document
// createDoc()


// we can pass paramenters now
// createDoc('Krishna',18,7000,['playing','sleeping'],true,[{value:'This is bad'}])

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})


