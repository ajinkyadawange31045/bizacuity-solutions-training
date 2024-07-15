//import mongoose
import mongoose from 'mongoose';

// then and etc
// const connectdb = (DATABASE_URL)=>{
//     return mongoose.connect(DATABASE_URL)
//     .then(()=>{
//         console.log("connected successfully")
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

// async function
const connectdb = async (DATABASE_URL)=>{
    try {
        // await mongoose.connect(DATABASE_URL);
        // options se pass karenge
        const DB_OPTIONS = {
            user:'ajinkya',
            pass:'123456',
            dbName:'schooldb',
            authSource:'schooldatabase'
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("connected successfully");
    } catch (err) {
        console.log(err);
    }
}

export {connectdb}