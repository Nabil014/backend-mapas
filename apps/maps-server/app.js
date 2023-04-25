const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const { configDocs: docs } = require('@accessmap/api-docs')
const morgan = require('morgan')
const routes = require('./src/routes/index')
const { createRoles } = require('./src/libs/initialSetup')

require('./db.js')

const server = express()
createRoles()

server.use(express.json())
const cors = require('cors')

server.get('/', (req, res) => {
  res.send('Welcome to the accessMap API')
})
server.name = 'API'
server.use(cors())
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
server.use(bodyParser.json())
server.use(cookieParser())
server.use(morgan('dev'))
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

server.use('/', routes)

server.use('/api-docs', docs)

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500
  const message = err.message || err
  console.error(err)
  res.status(status).send(message)
})

module.exports = server
