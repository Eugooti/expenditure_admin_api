const categoryModel=require("../../models/Category")
const CRUDController=require("../../middleware/CRUDControllers/index")

module.exports=CRUDController(categoryModel);