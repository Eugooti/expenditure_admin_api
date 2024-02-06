const express=require('express')
const userController=require("../controllers/appControllers/userController")
const eventController=require("../controllers/appControllers/eventController")
const expenditureController=require("../controllers/appControllers/expenditureModel")
const todoController=require("../controllers/appControllers/todoController")
const categoryController=require("../controllers/appControllers/categoryController")
const {catchErrors}=require('../handlers/errorHandlers')
const{hasPermission}=require("../middleware/permissions/permission")

const router=express.Router();
// ----------------------------------API FOR USERS-----------------------------------------------
router.route("/user/create").post(catchErrors(userController.createUser))

router.route("/user/users").get(catchErrors(userController.readAll))

router.route("/user/user/:id").get(catchErrors(userController.readById))



// -------------------------------API FOR CATEGORIES----------------------------------------------


router.route("/categories/create").post(catchErrors(categoryController.create))

router.route("/categories/categories").get(catchErrors(categoryController.readAll))

router.route("/categories/category/:id").get(catchErrors(categoryController.readById))

router.route("/categories/delete/:id").delete(catchErrors(categoryController.remove))

router.route("/categories/update/:id").put(catchErrors(categoryController.update))


// -------------------------------API FOR EXPENDITURE---------------------------------------------


router.route("/expenditures/create").post(catchErrors(expenditureController.create))

router.route("/expenditures/expenditures").get(catchErrors(expenditureController.readAll))

router.route("/expenditures/expenditure/:id").get(catchErrors(expenditureController.readById))


router.route("/expenditures/delete/:id").delete(catchErrors(expenditureController.remove))

router.route("/expenditures/update/:id").put(catchErrors(expenditureController.update))


// -------------------------------API FOR TODO----------------------------------------------------


router.route("/todo/todo").post(catchErrors(todoController.create))

router.route("/todo/todos").get(catchErrors(todoController.readAll))

router.route("/todo/todo/:id").get(catchErrors(todoController.readById))

router.route("/todo/todos/:user").get(catchErrors(todoController.readByUser))


// -------------------------------API FOR EVENTS--------------------------------------------------


router.route("/events/event").post(catchErrors(eventController.create))

router.route("/events/events").get(catchErrors(eventController.readAll))

router.route("/events/event/:id").get(catchErrors(eventController.readById))

module.exports=router;