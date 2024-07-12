import express from 'express';
const app = express()
const port = process.env.PORT || '3000';

//import mongoose
import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/test").then(()=>{
    console.log("connected successfully")
})

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})


