const { DataTypes } = require("sequelize");
const { sequelize } = require("./database.js");

// Project Schema
Project = sequelize.define("Project", {
	project_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	project_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	project_start_date: {
		type: DataTypes.DATE,
		allowNull: false,
	},
});

module.exports = {Project};
