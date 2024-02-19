import userPostModel from "../models/postSchema.js";
import registerModel from "../models/registrationSchema.js";

const successUserPostController = async(req,res)=>{
    try {
        const userData = await registerModel.findById({_id:req.session.user_id});
        res.render("userpost",{"name":userData.name});
    } catch (error) {
        console.log(error.message);
    }
}

const userPostController = async(req,res)=>{
    try {
        const postData = await new userPostModel({
            title : req.body.title,
            description : req.body.description
        })
        await postData.save();
        res.redirect("/dashboard");
        console.log("Post Saved");
        
    } catch (error) {
        console.log(error.message);
    }
}

export {userPostController , successUserPostController};