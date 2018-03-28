const { camelizeKeys, decamelizeKeys } = require('humps')
const fetch = require('../utils/fetch')

const GITHUB_ISSUES =
  'https://api.github.com/repos/HannoverJS/talks/issues?state=open&labels=Upcoming%20Talk'

const talkRegExp = /^#{5} (.+)(?:\s+#{6} (.+))?(?:\s+#{6} \[(.+)]\((.+)\))?\s+([\s\S]+)\s*$/

function extractTalk(body) {
  const [
    name = null,
    occupation = null,
    socialName = null,
    socialUrl = null,
    description = null
  ] = body.match(talkRegExp).slice(1, 6)

  return {
    name,
    occupation,
    socialName,
    socialUrl,
    description
  }
}

function talks(req, res) {
  fetch(GITHUB_ISSUES).then(issues => {
    const body = camelizeKeys(issues)
      .filter(
        ({ milestone }) =>
          Boolean(milestone) &&
          new Date(milestone.dueOn).valueOf() > new Date().valueOf()
      )
      .map(
        ({
          title,
          body,
          user: { avatarUrl },
          milestone: { dueOn },
          updatedAt
        }) => {
          const date = new Date(dueOn)
          date.setDate(date.getDate() - 1)
          date.setHours(19)

          const {
            name,
            occupation,
            socialName,
            socialUrl,
            description
          } = extractTalk(body)

          return decamelizeKeys({
            title,
            description,
            date,
            updatedAt,
            speaker: {
              name,
              avatarUrl,
              occupation,
              socialName,
              socialUrl
            }
          })
        }
      )
    return res.send(body)
  })
}

talks.extractTalk = extractTalk

module.exports = talks
