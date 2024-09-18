const { DataTypes } = require("sequelize");
const { sequelize } = require("./database.js");

Club = sequelize.define("Club", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  clubName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
  },
  clubHeads: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  clubLeads: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  clubEmail: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contactNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = { Club };
