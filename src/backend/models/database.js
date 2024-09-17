const { Sequelize } = require("sequelize");
// authentication replace database by name of database  , and password by your postgres password

let { POSTGRES_HOST, POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD, ENDPOINT_ID } = process.env;

const sequelize = new Sequelize('SAC', 'postgres', '786923', {
  host: 'localhost', 
  dialect: "postgres",
  port: 5432,
});


module.exports = { sequelize };
