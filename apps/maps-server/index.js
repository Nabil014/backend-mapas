const server = require('./app')
const { PORT } = require('./config')

/**
 * @openapi
 *  /api/healthy:
 *    get:
 *      tags:
 *        - Healthy
 *      summary: Verifica si la API esta funcionando.
 *      description: Responde si la aplicacion esta levantada y funcionando
 *      responses:
 *        200:
 *          description: La aplicasion esta funcionando
 */
server.get('/api/healthy', (_, res) => {
  res.status(200).send({ status: 'ok', message: 'simple healthy response' })
})

server.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`)
})
