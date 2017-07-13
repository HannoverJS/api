const got = require('got')
const cache = require('./cache')

function fetch(url, opts) {
  const cacheData = cache.get(url)

  if (cacheData) {
    return Promise.resolve(cacheData)
  }

  const gotOpts = Object.assign({ json: true }, opts)

  gotOpts.header = Object.assign(
    {
      headers: {
        'User-Agent': 'https://github.com/hannoverjs/hannoverjs-api'
      }
    },
    gotOpts.headers
  )

  return got(url, gotOpts).then(({ body }) => {
    cache.set(url, body)
    return body
  })
}

module.exports = fetch
