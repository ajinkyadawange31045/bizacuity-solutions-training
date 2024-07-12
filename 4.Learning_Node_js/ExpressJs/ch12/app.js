import express from 'express';
const app = express()
const port = process.env.PORT || '3000';
import web from './routes/web.js'
import e from 'express';

// setup the directory where template files are located
// app.set('views','./views') //it is useless if the folder name is views, but if other name then this can be used

//set ip the template enginer to use
app.set('view engine','ejs');

//static file
import {join} from 'path';
app.use(express.static(join(process.cwd(),'public')))

app.use('/',web);

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})

