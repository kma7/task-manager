const taskRoutes = require('./task_routes')

module.exports = (app, db) => {
  taskRoutes(app, db)
  // Other route groups could go here, in the future
}
