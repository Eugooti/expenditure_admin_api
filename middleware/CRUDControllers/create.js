const {hash} = require("bcrypt");
const create = async (Model,req,res) => {
    try {
        const result=await Model.create(req.body)

        return res.status(200).json({
            success: true,
            result,
            message: 'Successfully Created a record in the database',
        })

    }catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            // Handle duplicate key error (emailAddress)
            return res.status(400).json({ error: 'User already exists with this email address' });
        }

        return res.status(500).json({
            success: false,
            result: null,
            message: 'Error while creating a record in the database',
            error: error.message,
        });
    }
}

const createUser = async (Model,req,res) => {
    try {
        const { firstName, lastName, emailAddress, phoneNumber, access } = req.body;

        // Generate a salt and hash the password
        const saltRounds = 10;
        const hashedPassword = await hash(emailAddress, saltRounds);

        const user = await Model.create({
            firstName,
            lastName,
            emailAddress,
            access,
            phoneNumber,
            password: hashedPassword
        });

        if (user){
            return res.status(201).json({
                message: 'User created successfully',
                success:true,
            });
        }
        return res.status(500).json({error:"Failed to create user"})

    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            // Handle duplicate key error (emailAddress)
            return res.status(400).json({
                error: 'User already exists with this email address',
                success:false
            });
        }

        return res.status(500).json({
            error: 'Failed to create user',
            success:false
        });
    }
}

module.exports= {create,createUser};