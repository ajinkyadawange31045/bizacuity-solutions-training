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

// compilling Schema
const studentModel = mongoose.model('student',studentSchema)

// Update Documet
const updateDocById = async (id) =>{
    try {
        // const result = await studentModel.findByIdAndUpdate(id,{name:'Radha krishna'});
        const result = await studentModel.findByIdAndUpdate(id,{name:'Radha-Krishna'},{returnDocument:"after"});
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}


const updateOneDoc = async (id)=>{
    try {
        const result = await studentModel.updateMany({_id:id},{name:"Radha"},{upsert:true})//isme id filter, but dhyan rhe unique field ke basis pe filter kare..
        console.log(result)
    } catch (error) {
        console.log(error)
        
    }
}

const updateManyDoc = async (a)=>{
    try {
        const result = await studentModel.updateOne({age:a},{name:"Ajinkya D."})
        console.log(result)
    } catch (error) {
        console.log(error)
        
    }
}



export {updateDocById,updateOneDoc,updateManyDoc}