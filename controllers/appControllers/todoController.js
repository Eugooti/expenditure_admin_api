const todoModel=require("../../models/ToDoModel")
const CRUDController=require("../../middleware/CRUDControllers/index")

module.exports=CRUDController(todoModel);