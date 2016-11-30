const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const hello = require('./routes/hello')
const meetups = require('./routes/meetups')
const talks = require('./routes/talks')
const team = require('./routes/team')

const PORT = 3000

function onListen() {
  console.log(`Server is listening on port ${PORT} 🚀`) // eslint-disable-line no-console
}

express()
  .use(helmet())
  .use(cors({ origin: '*' }))
  .get('/', hello)
  .get('/meetups', meetups)
  .get('/talks', talks)
  .get('/team', team)
  .listen(PORT, onListen)
