const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * @openapi
 * components:
 *  schemas:
 *    Role:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *        name:
 *          type: string
 *          default: admin
 */
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
