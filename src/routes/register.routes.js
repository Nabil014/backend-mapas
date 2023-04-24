const express = require('express')
const User = require('../models/user')

const router = express.Router()

// router.post('/', (req, res) => {
//   const { name, lastname, email, password, disability } = req.body
//   try {
//     const userExist = User.findOne({ email })
//     if (!userExist) {
//       const newUser = new User({
//         name,
//         lastname,
//         email,
//         password,
//         disability,
//       })
//       newUser.save()
//       res.status(201).json(newUser)
//     } else {
//       res.status(400).send('El usuario ya existe')
//     }
//   } catch (error) {
//     console.log(error)
//   }
// })

module.exports = router
