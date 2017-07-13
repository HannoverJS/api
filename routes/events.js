const { camelizeKeys, decamelizeKeys } = require('humps')
const fetch = require('../utils/fetch')

const MEETUP_EVENTS =
  'https://api.meetup.com/hannoverjs/events?page=3&status=upcoming'

const { MEETUP_TOKEN } = process.env

if (!MEETUP_TOKEN) {
  throw new TypeError(
    `Expected 'process.env.MEETUP_TOKEN' to be set, got ${MEETUP_TOKEN}`
  )
}

function events(req, res) {
  fetch(MEETUP_EVENTS, {
    Authorization: `Bearer ${MEETUP_TOKEN}`
  }).then(meetupEvents => {
    const body = meetupEvents.map(event => {
      const {
        time,
        updated,
        venue: {
          name,
          lat,
          lon,
          address_1: street,
          city,
          country,
          localizedCountryName
        },
        link: meetupUrl,
        howToFindUs
      } = camelizeKeys(event)

      return decamelizeKeys({
        date: new Date(time),
        updatedAt: new Date(updated),
        meetupUrl,
        venue: {
          name,
          lat,
          lon,
          street,
          city,
          country,
          localizedCountryName,
          howToFindUs
        }
      })
    })
    return res.send(body)
  })
}

module.exports = events
