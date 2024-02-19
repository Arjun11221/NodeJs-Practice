import registerModel from "../models/registrationSchema.js";
import userPostModel from "../models/postSchema.js";

const homeController = async(req,res)=>{
    const allpost = await userPostModel.find({});
    res.render("index",{"allpost" : allpost});
}

const dashboardController = async(req,res)=>{
    if(req.session.user_id){
        const userData = await registerModel.findById({_id:req.session.user_id});
        // console.log(userData);
        res.render("dashboard" , {"name":userData.name});
    }
    
}
export {homeController,dashboardController}; 