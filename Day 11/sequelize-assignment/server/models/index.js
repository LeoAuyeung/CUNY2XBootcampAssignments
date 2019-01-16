//Modify the db (database)
const db = require('./db');
//Register your models
const Campuses = require('./campuses'); //require('./models/campuses.js');
const Students = require('./students'); //require('./models/students.js');

Students.belongsTo(Campuses);
Campuses.hasMany(Students);

Students.sync( {force: true} )
    .then(() => console.log("Students synced"))
    .catch(err => console.error(err))

Campuses.sync( {force: true} )
    .then(() => console.log("Campuses synced"))
    .catch(err => console.error(err))

//Export the modified db to be synced() and have a barrel file to grab models
module.exports = { db, Campuses, Students }

/*
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432')

const Hat = sequelize.define('hat', {
    name: Sequelize.STRING,
    material: Sequelize.STRING,
    height: Sequelize.INTEGER,
    brim: Sequelize.BOOLEAN
})

Hat.sync( {force: true} //equal to drop hats )
    .then(() => console.log('Hats model synced!'))
)

module.exports = Hat;

const User = Sequelize.define('user'{
    name: Sequelize.STRING
})

User.hasMany(Hat)
Hat.belongsTo(User)
*/