const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

/**
 * @openapi
 * components:
 *  schemas:
 *    LoginUserInput:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: juan.perez@example.com
 *        password:
 *          type: string
 *          default: contrasena123
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - name
 *        - lastname
 *        - email
 *        - password
 *      properties:
 *        name:
 *          type: string
 *          default: Juan
 *        lastname:
 *          type: string
 *          default: Perez
 *        email:
 *          type: string
 *          default: juan.perez@example.com
 *        password:
 *          type: string
 *          default: contrasena123
 *        avatar:
 *          type: string
 *        disability:
 *          type: array
 *          items:
 *            type: string
 *        roles:
 *          $ref: '#/components/schemas/Role'
 */
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    disability: [],
    roles: [
      {
        ref: 'Role',
        type: Schema.Types.ObjectId
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}
userSchema.statics.comparePassword = async (password, recivedPassword) => {
  return await bcrypt.compare(password, recivedPassword)
}

const model = mongoose.model('User', userSchema)
module.exports = model
