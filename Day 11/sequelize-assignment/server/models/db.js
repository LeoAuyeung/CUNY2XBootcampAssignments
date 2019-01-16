const Sequelize = require("sequelize");
//const db = new Sequelize("postgres://localhost/students");
//module.exports = db;

module.exports = new Sequelize('students','postgres','password',
{
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
});