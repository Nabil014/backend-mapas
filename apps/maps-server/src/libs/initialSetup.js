const Role = require('../models/role')

const createRoles = async () => {
  try {
    // Count Documents
    const count = await Role.estimatedDocumentCount()

    // check for existing roles
    if (count > 0) return

    // Create default Roles
    const values = await Promise.all([
      new Role({ name: 'user' }).save(),
      new Role({ name: 'moderator' }).save(),
      new Role({ name: 'admin' }).save()
    ])

    // TODO: remove this console
    console.info(values)
  } catch (error) {
    console.error(error)
  }
}
module.exports = { createRoles }
