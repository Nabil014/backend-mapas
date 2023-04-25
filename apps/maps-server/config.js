const dotenv = require('dotenv')
dotenv.config()

const SECRET = process.env.SECRET
const PORT = process.env.PORT || 3000

module.exports = {
  SECRET,
  PORT
}
