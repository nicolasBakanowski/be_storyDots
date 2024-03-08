import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: process.env.MYSQL_USER || 'myuser',
  password: process.env.MYSQL_PASSWORD || 'mypassword',
  database: 'mydb',
})

export default sequelize
