const homeController = (req,res)=>{
    // res.send("Home")
    res.render('index',{'name':'Radha'})
}

export {homeController}