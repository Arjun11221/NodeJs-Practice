import registerModel from "../models/registrationSchema.js";

const loginController = (req,res)=>{
    res.render("login")
}

const userLoginController = async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.pwd;
        const data = await registerModel.findOne({email:email});
        if(data){
            if(data.password==password){
                req.session.user_id = data._id;
                res.redirect("/dashboard");
            }else{
                res.render("login");
            }   
        }
        else{
            res.render("login");
        }

    } catch (error) {
        console.log(error.message);

    }
}
const logoutController = async(req,res)=>{
    try {
        if(req.session.user_id){
            req.session.destroy();
            res.redirect("/login");
        }
    } catch (error) {
        console.log(error.message);
    }
}
export {loginController , userLoginController , logoutController};