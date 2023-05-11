const User = require('../models/user')
const Role = require('../models/role')
const jwt = require('jsonwebtoken')
const config = require('../../config')

/**
 * @openapi
 *  /api/auth/signup:
 *    post:
 *      tags:
 *        - Authentication
 *      summary: Crear un usuario
 *      description: Crear un nuevo usuario en la aplicasion
 *      requestBody:
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserInput'
 *          required: true
 *      responses:
 *        200:
 *          description: El nuevo usuario fue creado exitosamente
 */
const signUp = async (req, res) => {
  const { name, lastname, email, password, roles } = req.body

  const newUser = new User({
    name,
    lastname,
    email,
    password: await User.encryptPassword(password)
  })

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } })
    newUser.roles = foundRoles.map((role) => role._id)
  } else {
    const role = await Role.findOne({ name: 'user' })
    newUser.roles = [role._id]
  }

  const savedUser = await newUser.save()
  console.log(savedUser)

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: config.TOKEN_DURATION
  })
  res.status(200).json({ token })
}

/**
 * @openapi
 *  /api/auth/signin:
 *    post:
 *      tags:
 *        - Authentication
 *      summary: logear un usuario
 *      description: logear un usuario, un nuevo token sera entregado al usuario.
 *      requestBody:
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LoginUserInput'
 *          required: true
 *      responses:
 *        200:
 *          description: El nuevo usuario fue logeado exitosamente exitosamente
 */
const signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    'roles'
  )

  if (!userFound) return res.json({ message: 'User not found' })

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  )
  if (!matchPassword) {
    return res.status(401).json({ token: null, message: 'Invalid Password' })
  }

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: config.TOKEN_DURATION
  })

  console.log(userFound)
  res.json({ token })
}

module.exports = { signIn, signUp }
