const Create=require("./create")
const Read=require("./read")
const Update=require("./update")
const remove=require("./delete")

const {read,readByUser,readById}=Read;

const CRUDControllers = (model) => {
    const {create,createUser}=Create;

    let crudMethods={};

    crudMethods.create=async (req,res)=>{
        await create(model, req, res);
    }

    crudMethods.createUser=async (req,res)=>{
        await createUser(model, req, res)
    }

    crudMethods.readAll=async (req,res)=>{
        await read(model, req, res)
    }

    crudMethods.readByUser=async (req,res)=>{
        await readByUser(model, req, res)
    }

    crudMethods.remove=async (req,res)=>{
        await remove(model, req, res)
    }
    crudMethods.readById=async (req,res)=>{
        await readById(model, req, res)
    }

    crudMethods.update=async (req,res)=>{
        await Update(model, req, res)
    }

    return crudMethods;

}
module.exports=CRUDControllers;