const login=require("./login")

const authentication = (model) => {
    let authMethods={};

    authMethods.login=async (req,res)=>{
        await login(model, req, res)
    }

    return authMethods;

}

module.exports=authentication;