const mongoose = require('mongoose')
const { database: { user, password, host } = {} } = require('./config')

mongoose.connect(
  `mongodb+srv://${user}:${password}@${host}/?retryWrites=true&w=majority`
)
