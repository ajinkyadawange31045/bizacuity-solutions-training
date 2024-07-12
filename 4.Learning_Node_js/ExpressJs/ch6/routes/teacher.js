//routing

import express from 'express';
const router = express.Router()
const port = process.env.PORT || '3000';


//learn to create routes
// it hits '/' route so it responds with its call back function
router.get('/',(req,res)=>{
    res.send("Only at /teacher")
})

router.get('/all',(req,res)=>{
    res.send('teacher page')
})
router.get('/create',(req,res)=>{
    res.send('create page')
})




export default router