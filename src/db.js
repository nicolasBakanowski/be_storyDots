import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
console.log("estara asi la data", process.env.MYSQL_URL )
const sequelize = new Sequelize(process.env.MYSQL_URL, {
  dialect: 'mysql',
});

export default sequelize;