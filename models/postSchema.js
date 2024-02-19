import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
});

const userPostModel = mongoose.model("post",postSchema);
export default userPostModel;