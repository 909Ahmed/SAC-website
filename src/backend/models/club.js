const { DataTypes } = require("sequelize");
const { sequelize } = require("./database.js");

Club = sequelize.define("Club", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING,
  },
  budget: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { Club };
