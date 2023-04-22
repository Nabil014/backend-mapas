const dotenv = require('dotenv')
const server = require('./app')
dotenv.config()

const PORT = process.env.PORT || 3000

server.get('/healthy', (_, res) => {
  res.status(200).send({ status: 'ok', message: 'simple healthy response' })
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
