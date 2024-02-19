import registerModel from "../models/registrationSchema.js";

const homeController = (req,res)=>{
    res.render("index");
}

const dashboardController = async(req,res)=>{
    if(req.session.user_id){
        const userData = await registerModel.findById({_id:req.session.user_id});
        // console.log(userData);
        res.render("dashboard" , {"name":userData.name});
    }
    
}
export {homeController,dashboardController}; 