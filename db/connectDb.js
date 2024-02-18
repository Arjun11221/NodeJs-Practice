import mongoose from "mongoose";

const connectDb = async(DATABASE_URL)=>{
    try {
        const DB_OPTIONS = {
            dbName : "Node_Practice"
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("MongoDb Connected");
        
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDb;