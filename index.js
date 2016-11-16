const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const request = require('request')

const PORT = 3000

const CORS_OPTIONS = {
  origin: '*'
}

const MEETUP_EVENTS = 'https://api.meetup.com/hannoverjs/events?photo-host=public&page=3&sig_id=193357699&status=upcoming&sig=256508baa3f83fe1bd67800821466f0f0e8b6cb2'
const GITHUB_ISSUES = 'https://api.github.com/repos/HannoverJS/talks/issues?state=open&labels=Upcoming%20Talk'

const fetchCache = {}

function fetch(url, cb) {
  const cache = fetchCache[url]

  if (cache && (Date.now() - cache.timestamp) < 3600000) {
    return cb(cache.data)
  }

  const options = {
    url,
    headers: {
      'User-Agent': 'HannoverJS'
    }
  }

  request(options, (err, res, body) => {
    if (!err && res.statusCode === 200) {
      const data = JSON.parse(body)
      fetchCache[url] = {
        data,
        timestamp: Date.now()
      }
      return cb(data)
    }
  })
}

express()
  .use(helmet())
  .use(cors(CORS_OPTIONS))
  .get('/upcoming/meetups', (req, res) => {
    fetch(MEETUP_EVENTS, meetups => res.send(meetups))
  })
  .get('/upcoming/talks', (req, res) => {
    fetch(GITHUB_ISSUES, talks => res.send(talks))
  })
  .listen(PORT)
