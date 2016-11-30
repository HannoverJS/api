const fetch = require('../utils/fetch')

const MEETUP_EVENTS = 'https://api.meetup.com/hannoverjs/events?page=3&status=upcoming'

const { MEETUP_TOKEN } = process.env

if (!MEETUP_TOKEN) {
  throw new TypeError(`Expected 'process.env.MEETUP_TOKEN' to be set, got ${MEETUP_TOKEN}`)
}

function meetups(req, res) {
  fetch(MEETUP_EVENTS, {
    Authorization: `Bearer ${MEETUP_TOKEN}`
  }).then(m => res.send(m))
}

module.exports = meetups
