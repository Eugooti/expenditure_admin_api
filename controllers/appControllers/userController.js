const userModel=require("../../models/UsersModel");
const CRUDController=require("../../middleware/CRUDControllers/index")
module.exports=CRUDController(userModel);