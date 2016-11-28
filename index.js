const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const got = require('got')

const MEETUP_EVENTS = 'https://api.meetup.com/hannoverjs/events?photo-host=public&page=3&sig_id=193357699&status=upcoming&sig=256508baa3f83fe1bd67800821466f0f0e8b6cb2'
const GITHUB_ISSUES = 'https://api.github.com/repos/HannoverJS/talks/issues?state=open&labels=Upcoming%20Talk'

const cache = new Map()

function setCache(key, data) {
  cache.set(key, {
    data,
    lastUpdated: Date.now()
  })
}

function getCache(key) {
  if (!cache.has(key)) {
    return null
  }

  const { data, lastUpdated } = cache.get(key)
  const TTL = 3600000 // 1 hour
  if ((Date.now() - lastUpdated) < TTL) {
    return data
  }
}

function fetch(url, cb) {
  const cacheData = getCache(url)

  if (cacheData) {
    return cb(cacheData)
  }

  const options = {
    headers: {
      'User-Agent': 'HannoverJS'
    }
  }

  got(url, options).then((response) => {
    const body = JSON.parse(response.body)
    setCache(url, body)
    cb(body)
  })
}

express()
  .use(helmet())
  .use(cors({ origin: '*' }))
  .get('/meetups/upcoming', (req, res) => {
    fetch(MEETUP_EVENTS, meetups => res.send(meetups))
  })
  .get('/talks/upcoming', (req, res) => {
    fetch(GITHUB_ISSUES, talks => res.send(talks))
  })
  .listen(3000, () => console.log('Server is listening on port 3000 ✨'))
