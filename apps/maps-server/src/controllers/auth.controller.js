const User = require('../models/user')
const Role = require('../models/role')
const jwt = require('jsonwebtoken')
const config = require('../../config')

const singUp = async (req, res) => {
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
    expiresIn: 86400 // 24 horas
  })
  res.status(200).json({ token })
}

const singIn = async (req, res) => {
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
    expiresIn: 86400
  })

  console.log(userFound)
  res.json({ token })
}

module.exports = { singIn, singUp }
