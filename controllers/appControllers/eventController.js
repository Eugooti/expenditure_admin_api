const calendarModel=require("../../models/CalenderModel")
const CRUDController=require("../../middleware/CRUDControllers/index")
module.exports=CRUDController(calendarModel);