const userModel=require("../../models/UsersModel")
const authControllers=require("../../middleware/authMiddleware/index")

module.exports=authControllers(userModel);