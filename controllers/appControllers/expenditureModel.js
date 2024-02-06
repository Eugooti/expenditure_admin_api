const expenditureModel=require("../../models/ExpenditureModel")
const CRUDController=require("../../middleware/CRUDControllers/index")

module.exports=CRUDController(expenditureModel);