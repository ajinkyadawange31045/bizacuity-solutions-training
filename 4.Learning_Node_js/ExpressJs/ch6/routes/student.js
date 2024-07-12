
import express from 'express';
const router = express.Router()
const port = process.env.PORT || '3000';

router.get('/all',(req,res)=>{
    res.send('student all page')
})
router.get('/create',(req,res)=>{
    res.send('create page')
})

// router.listen(port,()=>{
//     console.log(`server listening at http://localhost:${port}`)
// })


export default router