import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectDB =async()=>{
    try{
        await mongoose.connect(process.env.mongooDB_url);
        console.log("MongoDB connected");
    }catch(err){
        console.log("Error happend: ",err);
    }
}
export default connectDB;