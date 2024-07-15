import mongoose, { Schema } from "mongoose";
const studentSchema = new mongoose.Schema({
    // _id:Number,
    name : {type:String,required: true, trim:true},
    age:{type:Number,required:true,min:18, max:65},
    fees:{type:mongoose.Decimal128, required:true, validate:(v)=>{v >= 5500.50}},
    hobbies : {type:Array},
    isactive:{type:Boolean},
    comments:[{value:{type:String},publish:{type:Date, default:Date.now}}],
    join:{type:Date,default:Date.now}
})

// console.log(studentSchema.path('age'))

// compilling Schema
const studentModel = mongoose.model('student',studentSchema) //yaha se collection banta hai, then schema is created.


// const createDoc = async ()=>{
//     try {
//         // creating new document
//         const studentDoc = new studentModel({
//             // id = 123
//             name:"Uday",
//             age:19,
//             fees: 6000.50,
//             hobbies:['dancing','reading','travelling'],
//             isactive:true,
//             comments:[{value:'This is good mongoose'}]
//         })


//         //saving documents
//         const result = await studentDoc.save()
//         console.log(result)

//     } catch (error) {
//         console.log(error)
//     }
// }



// let us pass the parameters in function
const createDoc = async (nm,age,fees,hob,isact,cmt)=>{
    try {
        // creating new document
        const studentDoc = new studentModel({
            // id = 123
            name:nm,
            age:age,
            fees: fees,
            hobbies:hob,
            isactive:isact,
            comments:cmt
        })


        //saving documents
        const result = await studentDoc.save()
        console.log(result)

    } catch (error) {
        console.log(error)
    }
}


export {createDoc}







