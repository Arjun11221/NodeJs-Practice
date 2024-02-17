import express from "express";
const router = express.Router();
import homeController from "../controller/homeController.js";
import aboutController from "../controller/aboutController.js";
import contactController from "../controller/contactController.js";
import loginController from "../controller/loginController.js";
import registerController from "../controller/registerController.js";


router.get("/",homeController);
router.get("/about",aboutController);
router.get("/contact",contactController);
router.get("/login",loginController);
router.get("/register",registerController);


export default router;