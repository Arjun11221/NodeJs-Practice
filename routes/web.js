import express from "express";
const router = express.Router();
import multer from "multer";
import path from "path";
import {
  homeController,
  dashboardController,
} from "../controller/homeController.js";
import aboutController from "../controller/aboutController.js";
import contactController from "../controller/contactController.js";
import {
  loginController,
  userLoginController,
  logoutController,
} from "../controller/loginController.js";
import {
  registerController,
  userRegisterController,
} from "../controller/registerController.js";
import {
  isLogin,
  isLogout,
  registerMid,
} from "../middleware/userMiddleware.js";
import {
  userPostController,
  successUserPostController,
  totalPostController,
  deletePostController,
  editPostController,
  successEditPostController,
} from "../controller/userPostController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(process.cwd(),"/public/images/blogimages") )
    },
    filename: function (req, file, cb) {
      const img_name = Date.now() + '-' + file.originalname;
      cb(null, img_name);
    }
  })
  
const upload = multer({ storage: storage })

router.get("/", homeController);
router.get("/about", isLogin, aboutController);
router.get("/contact", isLogin, contactController);
router.get("/login", isLogout, loginController);
router.get("/register", registerMid, registerController);
router.post("/register", userRegisterController);
router.post("/login", userLoginController);
router.get("/dashboard", isLogin, dashboardController);
router.get("/logout", isLogin, logoutController);
router.get("/userpost", isLogin, successUserPostController);
router.post("/userpost", upload.single("image") ,userPostController);
router.get("/totalPost", isLogin, totalPostController);
router.get("/deletePost/:id", isLogin, deletePostController);
router.get("/editPost/:id", isLogin, editPostController);
router.post("/editPost/:id", isLogin, successEditPostController);

export default router;
