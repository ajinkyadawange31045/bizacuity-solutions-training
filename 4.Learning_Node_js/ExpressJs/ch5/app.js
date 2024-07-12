//routing

import express from 'express';
const app = express()
const port = process.env.PORT || '3000';

//learn to create routes
// it hits '/' route so it responds with its call back function
app.get('/',(req,res)=>{
    res.send("Get Method")
})


//post methods - it is used to create and insert data
// put - to update the data
//patch - to partially update the data
// all methods

// http://localhost:3000/sabkuch - on this it will print 'All Methods"
// app.all('/sabkuch',(req,res)=>{
//     res.send('All Method')
// })

// for all type of anonymous request, how to do that - 
// //we will show page not found, for every other paths being search
// app.all('*',(req,res)=>{
//     res.send('Page not found')
// })

//prefix, with api - for such urls http://localhost:3000/api/student ..
// app.all('/api/*',(req,res)=>{
//     res.send('API page')
// })


//Paths in detail
//1. String path
// app.get('/about',(req,res)=>{
//     res.send('About page')
// })
// app.get('/contact',(req,res)=>{
//     res.send('contact page')
// })



//2. string pattern
// app.get('/ab?cd',(req,res)=>{
//     res.send('This route path will match acd and abcd')
// })



//3. regular expression path (with example) /a/ - jisme kuch bhi a ho.
// app.get(/a/,(req,res)=>{
//     res.send('This is a')
// })
// http://localhost:3000/delhi - this will not work
// http://localhost:3000/nashik = this will give the get request, as it has a in it.




// call back

//1. one call back
// app.get(/cbexample1/,(req,res)=>{
//     res.send('one call back ex')
// })

//2.more than one call back
// app.get(/cbexample2/,(req,res,next)=>{
//     console.log('first call back')
//     next()
// },(req,res)=>
// {
//     console.log('2nd call back')
//     res.send("More than one call back - 3")
// }
// )


// 3/ an array of callback
const cb1 = (req,res,next)=>{
    console.log('1st')
    next()
}
const cb2 = (req,res,next)=>{
    console.log('2st')
    next()
}
const cb3 = (req,res,next)=>{
    console.log('3st')
    res.send('somethng')
}


// combination of indi function and array function

app.get('/ex3',[cb1,cb2,cb3])







app.listen(port,()=>{
    console.log(`server listening at http://locahost:${port}`)
})
