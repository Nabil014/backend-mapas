const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const documentation = require('./documentation')

const configDocs = (path) => {
  const specs = swaggerJsdoc({ ...documentation, apis: [`${path}/**/*.js`] })

  return [swaggerUi.serve, swaggerUi.setup(specs, { explorer: true })]
}

module.exports = {
  configDocs
}
