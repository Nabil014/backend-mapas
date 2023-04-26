const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roleSchema = new Schema(
  {
    name: String
  },
  {
    versionKey: false
  }
)

const model = mongoose.model('Role', roleSchema)
module.exports = model
