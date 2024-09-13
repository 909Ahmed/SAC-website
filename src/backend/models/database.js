const { Sequelize } = require("sequelize");
// authentication replace database by name of database  , and password by your postgres password

let { POSTGRES_HOST, POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD, ENDPOINT_ID } = process.env;

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  // host: POSTGRES_HOST,
  dialect: "postgres",
  port: 5432,
  // POSTGRES_URL="postgres://default:lxytp2Y3sveq@ep-proud-cell-a4pund3o-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  sslmode: "require"
});

module.exports = { sequelize };
