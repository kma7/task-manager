'use strict'

const express = require('express'),
  MongoClient = require('mongodb').MongoClient,
  bodyParser = require('body-parser'),
  app = express(),
  port = 8000
app.use(bodyParser.urlencoded({ extended: true }))
require('./app/routes')(app, {})

  app.listen(port, () => {
    console.log('We are live on ' + port)
  })
