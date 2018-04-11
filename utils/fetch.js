const got = require('got')
const cache = require('./cache')

async function fetch(url, opts) {
  const cacheData = cache.get(url)

  if (cacheData) {
    return cacheData
  }

  const gotOpts = Object.assign({ json: true }, opts)

  gotOpts.headers = Object.assign(
    {
      'User-Agent': 'https://github.com/hannoverjs/hannoverjs-api'
    },
    gotOpts.headers
  )

  const { body } = await got(url, gotOpts)

  return body
}

module.exports = fetch
