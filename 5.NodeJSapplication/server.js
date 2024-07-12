// load env vairable
if (process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

require("dotenv").config();

const express = require('express')
const connectToDb = require('./config/connectToDb');


const app = express()

connectToDb();

app.get('/',(req,res)=>{
    res.json({hello:"World"})
})

app.listen(process.env.PORT);