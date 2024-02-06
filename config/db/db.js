const Sequelize = require('sequelize');

// Create a Sequelize instance
const sequelize = new Sequelize('admindb', 'root', 'IN16/00054/19', {
    host: 'localhost', // MySQL server host
    dialect: 'mysql',
    port: 3306,
    logging: false,
    timezone: '+00:00',
});

module.exports=sequelize;
