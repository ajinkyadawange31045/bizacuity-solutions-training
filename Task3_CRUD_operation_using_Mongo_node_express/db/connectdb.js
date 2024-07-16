import mongoose from "mongoose";



// async function
const connectdb = async (DATABASE_URL)=>{
    try {
        const DB_OPTIONS = {
            dbName: 'school',
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("connected successfully");
    } catch (err) {
        console.log(err);
    }
}




export {connectdb}