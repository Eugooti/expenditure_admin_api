const { DataTypes } = require('sequelize');
const sequelize=require('../config/db/db');

// Define the Expenditure model
const Expenditure = sequelize.define('Expenditure', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cost:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdBy:{
        type: DataTypes.STRING,
        allowNull: false,
    },

});

// Sync the model with the database
Expenditure.sync();

module.exports = Expenditure;
