import registerModel from "../models/registrationSchema.js";

const registerController = (req,res)=>{
    res.render("register")
}
const userRegisterController = async(req,res)=>{
    const doc = new registerModel({
        name : req.body.name,
        age : req.body.age,
        email: req.body.email, 
        password : req.body.pwd,
        city : req.body.city
    });
    await doc.save();
    console.log("Registration Successfully");
    res.redirect("/login");
}
export {registerController , userRegisterController};