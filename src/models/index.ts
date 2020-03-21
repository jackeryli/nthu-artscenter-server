import { Sequelize } from "sequelize";
import dotenv from "dotenv";


dotenv.config();

export const db = new Sequelize({
  database: process.env.DB_NAME || "artscenter",
  username: process.env.DB_USERNAME || "admin",
  password: process.env.DB_PASSWORD || "admin12345",
  dialect: "postgres",
  logging: false,
});


