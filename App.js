const express=require('express')
const cors = require('cors');
require("dotenv").config()
const bodyParser=require('body-parser')
const morgan = require('morgan');
const Expenditure=require('./Models/ExpenditureModel')
const Category=require("./Models/Category")
const User=require("./Models/UsersModel")
const ToDo=require('./Models/ToDoModel')
const Calendar=require('./Models/CalenderModel')
const mainRoutes=require("./routes/main.controller")
const authRoutes=require("./routes/auth.controller")
const errorHandlers=require("./handlers/errorHandlers")
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');


const app=express();

app.use(morgan('dev'));

(async () => {
    try {
        await Expenditure.sync();
        await Category.sync();
        await User.sync();
        await Calendar.sync();
        await ToDo.sync()
        console.log('Database models synchronized with the database.');
    } catch (err) {
        console.error('Error synchronizing models:', err);
    }
})();

app.use(morgan('dev'));
app.use(cors());
//routes    
app.use(bodyParser.json())
app.use(cookieParser());

// JWT Middleware
app.use((req, res, next) => {
    const token = req.cookies.token;

    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
            if (err) {
                return res.status(401).json({ success: false, message: 'Invalid token' });
            }
            req.decoded = decoded;
            next();
        });
    } else {
        next();
    }
});
app.use("/api",mainRoutes)
app.use("/api",authRoutes)

app.use(errorHandlers.notFound)

app.listen(5000,()=>{
    console.log("running on port 5000")
})