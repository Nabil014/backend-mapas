const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const documentation = require('./documentation')

const specs = swaggerJsdoc(documentation)

module.exports = {
  configDocs: [swaggerUi.serve, swaggerUi.setup(specs, { explorer: true })]
}
