
import express, { Router } from 'express';
const router = express.Router()
import { allStudent,deleteStudent } from '../controllers/studentController.js';


//messy logic
// router.get('/all',(req,res)=>{
//     res.send("all student")
// })

// router.get('/delete/:id([0-9]{2})',(req,res)=>{
//     console.log(req.params)
//     const {id} = req.params
//     console.log(id)
//     if(id == 10){
//         res.send("Ye id delete nhi ho sakti.")
//     }
//     else{
//         res.send(`${id}`)
//     }
// })


// importing function , using controller
router.get('/all', allStudent)
router.get('/delete/:id([0-9]{2})',deleteStudent)

export default router