import express from "express";
const router = express.Router();
import {homeController,dashboardController} from "../controller/homeController.js";
import aboutController from "../controller/aboutController.js";
import contactController from "../controller/contactController.js";
import {loginController , userLoginController , logoutController} from "../controller/loginController.js";
import {registerController , userRegisterController} from "../controller/registerController.js";
import { isLogin, isLogout, registerMid } from "../middleware/userMiddleware.js";
import { userPostController , successUserPostController } from "../controller/userPostController.js";


router.get("/",homeController);
router.get("/about",isLogin,aboutController);
router.get("/contact",isLogin,contactController);
router.get("/login",isLogout,loginController);
router.get("/register",registerMid,registerController);
router.post("/register", userRegisterController);
router.post("/login", userLoginController);
router.get("/dashboard",isLogin,dashboardController);
router.get("/logout",isLogin,logoutController);
router.get("/userpost",isLogin,successUserPostController);
router.post("/userpost",userPostController);


export default router;