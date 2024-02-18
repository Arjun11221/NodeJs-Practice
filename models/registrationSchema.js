import mongoose, { model } from "mongoose";

const registrationSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    city : {
        type : String,
        required : true,
        trim : true
    },
    age : {
        type : Number,
        required : true
        
    },
    email : {
        type : String,
        required : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        trim : true
    }

});

const registerModel = mongoose.model("userRegistration" ,registrationSchema);
export default registerModel;
