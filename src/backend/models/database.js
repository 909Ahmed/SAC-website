const { Sequelize } = require("sequelize");
// authentication replace database by name of database  , and password by your postgres password

let { POSTGRES_HOST, POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD, PORT_NUM } = process.env;

const sequelize = new Sequelize(POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD, {
  host: POSTGRES_HOST, 
  dialect: "postgres",
  port: PORT_NUM
});


module.exports = { sequelize };
