const dotenv = require('dotenv')
dotenv.config()

const defaultPort = 3000

module.exports = {
  SECRET: process.env.SECRET,
  PORT: process.env.PORT || defaultPort,
  database: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST
  }
}
