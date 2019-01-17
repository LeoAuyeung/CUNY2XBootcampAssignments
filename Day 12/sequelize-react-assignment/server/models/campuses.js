const db = require("./db");
const Sequelize = require("sequelize");

//Campus.js - js file for Campus database constructor
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/111_Eighth_Avenue.jpg/1280px-111_Eighth_Avenue.jpg",
    validate: {
      isUrl: true
    }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
  }
});

module.exports = Campus; //Exports Campus definition for other files to access