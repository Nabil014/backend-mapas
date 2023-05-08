module.exports = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API para AccessMap',
      version: '0.1.0',
      description:
        'Esta es la Express API para la applicasion de AccessMap documentado con Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html'
      },
      contact: {
        name: 'devathon',
        url: 'https://programacion-es.dev/devathon-edition'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'URL utilizada durante el desarrollo del producto'
      }
    ]
  },
  apis: []
}
