
import {join} from 'path';
const homeController = (req,res)=>{
    // res.send("<h1>Home page</h1>")
    // res.sendFile('C:\Users\ajink\OneDrive\Desktop\bizacuity_soluntions_training\4.Learning_Node_js\ExpressJs\ch10\v\iews\index.html') -> this path can be achieved using joins
    console.log(join(process.cwd(),'views','index.html'))
    res.sendFile(join(process.cwd(),'views','index.html'))
}

const aboutController = (req,res)=>{
    res.send("About page")
}

export {homeController,aboutController}
