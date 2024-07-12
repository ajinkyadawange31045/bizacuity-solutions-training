import express, { Router } from 'express';
const app = express()
const port = process.env.PORT || '3000';
import {join} from 'path';

import web from './routes/web.js';
const option = {
    dotfiles: "ignore"
}

// static file code
// app.use(express.static('public'))
// console.log(join(process.cwd(),'public'))
// // app.use(express.static(join(process.cwd(),'public'))) //it is direct path, not a virtual path
// app.use('/', express.static(join(process.cwd(),'public'))) //it is a virtual path



// options
app.use(express.static(join(process.cwd(),'public'),option))



// load routes
app.use('/', web)


app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})
