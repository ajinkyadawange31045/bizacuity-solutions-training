import mongoose from "mongoose";

//defining database scheama
const studentSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:18,},
    fees:{type:Number, required:true, validate:(v)=> v>= 5000}
})

///model
const studentModel = mongoose.model("student",studentSchema)

export default studentModel;