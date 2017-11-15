module.exports = (app, db) => {
  app.post('/task', (req, res) => {
    // You'll create your note here.
    console.log(req.body)
    res.send('Hello')
  })
}
