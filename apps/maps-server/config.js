const dotenv = require('dotenv')
dotenv.config()

const defaultPort = 3000
const oneDay = 86400

module.exports = {
  SECRET: process.env.SECRET,
  PORT: process.env.PORT || defaultPort,
  TOKEN_DURATION: oneDay,
  database: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST
  }
}
