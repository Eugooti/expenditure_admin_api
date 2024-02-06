const express=require("express")
const authControllers=require("../controllers/authControllers/auth")
const {catchErrors}=require('../handlers/errorHandlers')


const router=express.Router();

// -------------------------------------Login-------------------------------------

router.route("/login").post(catchErrors(authControllers.login))

module.exports=router;

