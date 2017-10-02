require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const hello = require('./routes/hello')
const events = require('./routes/events')
const talks = require('./routes/talks')
const organizers = require('./routes/organizers')

const { PORT = 5000 } = process.env

express()
  .use(helmet())
  .use(cors({ origin: '*' }))
  .get('/', hello)
  .get('/events', events)
  .get('/talks', talks)
  .get('/organizers', organizers)
  .listen(PORT, () => console.log(`Server is listening on port ${PORT} 🚀`))
