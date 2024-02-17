
const homeController = (req,res)=>{
    let name = "Arjun";
    let age = 21;
    res.render("index" , {name : name ,age : age});
}

export default homeController; 