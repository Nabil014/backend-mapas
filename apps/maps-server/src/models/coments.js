const mongoose = require('mongoose')
const Schema = mongoose.Schema

const comentsSchema = new Schema(
  {
    comment: { type: String, required: true }
  },
  {
    versionKey: false
  }
)
const model = mongoose.model('Comment', comentsSchema)
module.exports = model
