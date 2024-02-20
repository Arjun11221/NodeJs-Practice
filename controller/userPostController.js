import userPostModel from "../models/postSchema.js";
import registerModel from "../models/registrationSchema.js";

const successUserPostController = async (req, res) => {
  try {
    const userData = await registerModel.findById({ _id: req.session.user_id });
    res.render("userpost", { name: userData.name });
  } catch (error) {
    console.log(error.message);
  }
};

const userPostController = async (req, res) => {
  try {
    const postData = await new userPostModel({
      title: req.body.title,
      description: req.body.description,
      image : req.file.filename
    });
    await postData.save();
    res.redirect("/dashboard");
    console.log("Post Saved");
  } catch (error) {
    console.log(error.message);
  }
};
const totalPostController = async (req, res) => {
  try {
    const allPost = await userPostModel.find({});
    res.render("totalPost", { "allPost": allPost });
  } catch (error) {
    console.log(error.message);
  }
};

const deletePostController = async (req, res) => {
  try {
    console.log(req.params.id);
    const deletePost = await userPostModel.findByIdAndDelete(req.params.id);
    if (deletePost) {
      console.log("Post Deleted");
      res.redirect("/totalPost");
    } else {
      console.log("Post not deleted");
    }
  } catch (error) {
    console.log(error.message);
  }
};

const editPostController = async (req, res) => {
  try {
    const result = await userPostModel.findById(req.params.id);
    res.render("editPost", { result: result });
  } catch (error) {
    console.log(error.message);
  }
};

const successEditPostController = async(req,res)=>{
    try {
        const updateData = await userPostModel.findByIdAndUpdate(req.params.id,req.body);
        if(updateData){
            console.log("Post Updated Successfully");
            res.redirect("/totalPost");
        }
    } catch (error) {
        console.log(error.message);
    }
}

export {
  userPostController,
  successUserPostController,
  totalPostController,
  deletePostController,
  editPostController,
  successEditPostController,
};
