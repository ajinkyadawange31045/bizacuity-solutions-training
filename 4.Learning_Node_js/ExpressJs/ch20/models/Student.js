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
const studentModel = mongoose.model('student',studentSchema)


//retrive all documents
const getAllDoc = async ()=>{
    const result = await studentModel.find()
    // console.log(result)
    // result.forEach(
        //   (item) =>{
    //         console.log(
    //             item.name,
    //             item.age,
    //             item.fees.toString(),
    //             item.hobbies[0],
    //             item.hobbies[1],
    //             item.isactive,
    //             item.comments[0].value,
    //             item.comments[0].publish,
    //             item.join,
    //         )
    //     }
    // )
}


//retrive specific documents fields
const getAllDocSpecificFields = async ()=>{
    // const result = await studentModel.find().select('name age')  //include
    // const result = await studentModel.find().select(['name','age'])  //include 2nd way
    // const result = await studentModel.find().select({name:1,age:1})  //include 3rd way
    
    //exclude
    // const result = await studentModel.find().select('-name -age')  //exculde
    // const result = await studentModel.find().select(['-name','-age'])  //exculde 2nd way
    // const result = await studentModel.find().select({name:0,age:0})  //exculde 3rd way

    //projection without name and age
    // const result = await studentModel.find({},'name age')
    
    // console.log(result)
}



//retrieve single document
const getSingleDoc = async ()=>{
    // const result = await studentModel.findById("6694cc0cb0d2249d5eefc0cb")
    // console.log(result)
    // console.log(result._id.getTimestamp(),result.name,result.age, result.fees.toString())
}



//retrieve single document with specific field
const getSingleDocSpecificField = async ()=>{
    // const result = await studentModel.findById("6694cc0cb0d2249d5eefc0cb",'name age')
    // console.log(result)
}

//retrieve document by field
const getDocByField = async ()=>{
    // const result = await studentModel.find({name:'Ajinkya'})
    // const result = await studentModel.find({age:18})

    // console.log(result)
}

//retrieve document by field with specific field
const getDocByFieldwithspecificfield = async ()=>{
    const result = await studentModel.find({name:'Ajinkya'}).select('name age')
    // const result = await studentModel.find({age:18})
    
    console.log(result)
}

//retirve limited document (bas 2 hi document dikhenge)
const getLimitedDoc = async ()=>{
    // const result = await studentModel.find().limit(2)
    const result = await studentModel.find({},null, {limit:2})
    console.log(result)
}


//retirve skip document
const getSkipDoc = async ()=>{
    const result = await studentModel.find().skip(1)//first wala hata diya, skip kar diya.
    console.log(result)
}


//count document (total kitne document hai, utne count hoge)
const getCount = async ()=>{
    const result = await studentModel.find().countDocuments()
    console.log(result)
}

//sorting document
const getSorted = async ()=>{
    const result = await studentModel.find().sort({age:1})//age ke basis pe sort karenge
    // const result = await studentModel.find().sort({age:-1})//descending order
    console.log(result)
}

//mixed doc
const mixedDoc = async ()=>{
    const result = await studentModel.find({},{name:1,age:1},{limit:2,skip:1})
    console.log(result)
}


//Comparison query operator
const compDoc = async ()=>{
    // const result = await studentModel.find({age:{$gt:18}})
    // const result = await studentModel.find({age:{$gte:18}})
    // const result = await studentModel.find({age:{$lte:19}})
    // const result = await studentModel.find({age:{$ne:19}})//not equal
    const result = await studentModel.find({age:{$in:[19,29]}})//jiski age 19 and 19 woh milege
// $nia //not in array

    console.log(result)
}


//logical operator
const logDoc = async ()=>{
    // const result = await studentModel.find({$and:[{age:22},{name:'Ajinkya'}]})//gives output, as both are satisfied
    // const result = await studentModel.find({$and:[{age:22},{name:'Rahul'}]})//no output
    const result = await studentModel.find({$and:[{age:{$gt:10}},{name:'Krishna'}]})//gives one output whose age is greater than 10 and whose name is krishna
    console.log(result)

    // $or operator
    // $not, $nor operator, you can read>

}




export {getAllDoc,getAllDocSpecificFields,getSingleDoc,getSingleDocSpecificField,getDocByField,getDocByFieldwithspecificfield,getLimitedDoc,getSkipDoc,getCount,getSorted,mixedDoc,compDoc,logDoc}