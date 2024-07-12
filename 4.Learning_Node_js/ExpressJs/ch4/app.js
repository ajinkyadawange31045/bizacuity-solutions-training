// const express = require('express')
import express from 'express'; //ES6 syntax.

const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.listen(port,()=>{
    console.log(`server listening at http://locahost:${port}`)
})