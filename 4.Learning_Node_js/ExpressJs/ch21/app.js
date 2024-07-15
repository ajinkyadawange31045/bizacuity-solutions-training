//import mongoose
import mongoose from 'mongoose';
import express from 'express';
const app = express()
const port = process.env.PORT || '3000';
// import './models/Student.js'
import { updateDocById, updateOneDoc,updateManyDoc } from './models/Student.js';
const DATABASE_URL = process.env.DATABASE_URL ||  "mongodb://localhost:27017"


import { connectdb } from './db/connectdb.js';
connectdb(DATABASE_URL)
// updateDocById('6694cc0cb0d2249d5eefc0cb')
// updateOneDoc('6694cc0cb0d2249d5eefc0cb')
updateManyDoc(22)

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})


