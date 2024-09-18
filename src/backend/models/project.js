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
	clubName: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	project_description: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	logo: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	memberNumber: {
		type: DataTypes.INTEGER,
		allowNull: true,
	},
	venue: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	skills:{
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: true,
	},
	project_start_date: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW,
		allowNull: false,
	}
});

module.exports = {Project};
