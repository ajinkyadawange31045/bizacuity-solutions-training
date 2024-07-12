// import old methods
// const stu = require('./routes/student.js')
// const tea = require('./routes/teacher.js')

import express from 'express';
const app = express()
const port = process.env.PORT || '3000';

// new method to import 
import stu from './routes/student.js'
import tea from './routes/teacher.js'


// load router modules
app.use('/vidhya',stu)
app.use('/teacher',tea)

//learn to create routes
// it hits '/' route so it responds with its call back function
// app.get('/',(req,res)=>{
//     res.send("Get Method")
// })

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})
