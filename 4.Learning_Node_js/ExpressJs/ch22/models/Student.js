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


// delete document
const deleteDocbyID = async (id) => {
    try {
        const result = await studentModel.findByIdAndDelete(id);
        console.log(result)
    } catch (error) {
        console.log(error)
    }
};


// delete one document by ages
// const deleteOneDocbyID = async (a) => {
//     try {
//         const result = await studentModel.deleteOne(id);
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// };

const deleteOneDocbyage = async (a) => {
    try {
        //deleting by age
        const result = await studentModel.deleteOne({age:a});
        console.log(result)
    } catch (error) {
        console.log(error)
    }
};

export { deleteDocbyID,deleteOneDocbyID,deleteOneDocbyage };