let ObjectID = require('mongodb').ObjectID


module.exports = (app, db) => {
  app.get('/tasks/:id', (req, res) => {
    const id = req.params.id
    const details = { '_id': new ObjectID(id) }
    db.collection('tasks').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'})
      } else {
        res.send(item)
      }
    })
  })

  app.post('/tasks', (req, res) => {
    // You'll create your task here.
    const task = { text: req.body.body, title: req.body.title }
    db.collection('tasks').insert(task, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' })
      } else {
        console.log(result)
        res.send(result.ops[0])
      }
    })
  })

  app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id
    const details = { '_id': new ObjectID(id) }
    db.collection('tasks').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'})
      } else {
        res.send('Task ' + id + ' deleted!')
      }
    })
  })

  app.put('/tasks/:id', (req, res) => {
    const id = req.params.id
    const details = { '_id': new ObjectID(id) }
    const task = { text: req.body.body, title: req.body.title }
    db.collection('tasks').update(details, task, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'})
      } else {
          res.send(task)
      }
    })
  })
}
