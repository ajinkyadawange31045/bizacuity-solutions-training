import express from 'express';
const app = express()
const port = process.env.PORT || '3000';

// dynamic route //it is not restricted to id only, we can give anytihing as input
// app.get('/student/delete/:id',(req,res)=>{
//     console.log(req.params) //whatever id we run in browser, it becomes value of key, in req.params
//     res.send(`Student ${req.params.id} deleted`)
// })

// 2 route paramters
// app.get('/products/:category/:id',(req,res)=>{
//     // console.log(req.params) 
//     // res.send(`producs ${req.params.category} and id ${req.params.id}`)
//     // destructure
//     const {category,id} = req.params
//     res.send(`Product Category: ${category} and product id ${id}`)
// })


// // 3 path can have variety
// app.get('/products/:category/id_dalo/:id',(req,res)=>{
  
//     const {category,id} = req.params
//     res.send(`Product Category: ${category} and product id ${id}`)

//     // for this -> http://localhost:3000/products/laptop/id_dalo/412
//     // output is -> Product Category: laptop and product id 412
// })



//4 some more
// app.get('/train/:from-:to',(req,res)=>{
//     console.log(req.params)
//     const {from,to} = req.params
//     res.send(`traveling from ${from} to ${to}`)
//     // for this http://localhost:3000/train/nashik-vrindavan 
//     // we get - traveling from nashik to vrindavan
// })


// //5. regular expression //[0-9]{2} - 0 to 9 koi bhi number of 2 digit
// app.get('/student/:id([0-9]{2})',(req,res)=>{
//     console.log(req.params) //whatever id we run in browser, it becomes value of key, in req.params
//     res.send(`Student ${req.params.id} deleted`)
// })

// 6. /:type(post|article)/:id -> ya toh post ya toh article mai hi run hoga
// app.get('/:type(post|article)/:id',(req,res)=>{
//     const {type, id} = (req.params) 
//     res.send(`${type} and ${id}`)
// })

// // 7 app.param
// app.param('id',(req,res,next,id)=>{
//     console.log(`id ${id}`)
//     next()
// })
// app.get('/user/:id',(req,res)=>{
//     console.log('this is user id path')
//     res.send("ok")
// })


// // 8. arary of route parameter
// app.param(['id','page'],(req,res,next,value)=>{
//     console.log(`call only once ${value}`)
//     next()
// })
// app.get('/user/:id/:page',(req,res,next)=>{
//     console.log('this is user id path1')
//     // res.send("ok")
//     next()
// })
// app.get('/user/:id/:page',(req,res)=>{
//     console.log('this is user id path2')
//     res.send("ok")
// })

//query string
app.get('/product',(req,res)=>{
    console.log(req.query)
    res.send(`Response :  ${req.query.category}`)
    // so for this - http://localhost:3000/product?category=mobile
    // we get -> Response : mobile

    // for this -> http://localhost:3000/product?category=mobile&id=34,
    // we get -> { category: 'mobile', id: '34' }

})




app.listen(port,()=>{
    console.log(`server listening at http://locahost:${port}`)
})
