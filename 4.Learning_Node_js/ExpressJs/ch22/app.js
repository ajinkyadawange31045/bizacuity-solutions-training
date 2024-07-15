//import mongoose
import mongoose from 'mongoose';
import express from 'express';
const app = express()
const port = process.env.PORT || '3000';
// import './models/Student.js'
import { deleteDocbyID,deleteOneDocbyID,deleteOneDocbyage } from './models/Student.js';
const DATABASE_URL = process.env.DATABASE_URL ||  "mongodb://localhost:27017"


import { connectdb } from './db/connectdb.js';
connectdb(DATABASE_URL)

// deleteDocbyID('3694cc0cb0d2249d5eefc0cb');
deleteDocbyID(null);//to delete the fields with not data in that
deleteOneDocbyID('6694ca0ce4392a1bd79954ea')
deleteOneDocbyage('22')


app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})


