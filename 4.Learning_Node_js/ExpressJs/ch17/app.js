//import mongoose
import mongoose from 'mongoose';
import express from 'express';
const app = express()
const port = process.env.PORT || '3000';
// const DATABASE_URL = "mongodb://localhost:27017/schooldatabase"
// or
const DATABASE_URL = process.env.DATABASE_URL ||  "mongodb://localhost:27017/schooldatabase"


import { connectdb } from './db/connectdb.js';
// ye ek line se bhi kaam ho jayega
// mongoose.connect("mongodb://localhost:27017/schooldatabase").then(()=>{
//     console.log("connected successfully")
// })

// instead import from other folder
connectdb(DATABASE_URL)

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})


