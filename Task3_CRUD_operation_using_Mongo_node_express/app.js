import express from 'express';
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
import { join } from 'path';
import web from './routes/web.js'

// database connection
import { connectdb } from './db/connectdb.js';
import exp from 'constants';
connectdb(DATABASE_URL);

import bodyParser from 'body-parser';
// app.use(express.urlencoded({extended:false}))
// Middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware to parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

//static files
app.use("/student",express.static(join(process.cwd(),"public")))
app.use("/student/edit",express.static(join(process.cwd(),"public")))

//set template enginer
app.set("view engine","ejs");

// load routes
app.use("/student",web);

app.listen(port,() => {
    console.log(`Server listening at http://localhost:${port}`)
})