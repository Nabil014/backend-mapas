const server = require('./app')
const { PORT } = require('./config')

server.get('/healthy', (_, res) => {
  res.status(200).send({ status: 'ok', message: 'simple healthy response' })
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
