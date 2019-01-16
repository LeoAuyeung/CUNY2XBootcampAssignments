const db = require("./db");
const Sequelize = require("sequelize");

//Students.js - js file for Students database constructor
const Students = db.define("students", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/111_Eighth_Avenue.jpg/1280px-111_Eighth_Avenue.jpg",
    validate: {
      isUrl: true
    }
  },
  gpa: {
      type: Sequelize.DECIMAL(10,2),
      validate: {
          min: 0,
          max: 4
      }
  }
});

module.exports = Students; //Exports Students definition for other files to access