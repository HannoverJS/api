const got = require('got')
const cache = require('./cache')

function fetch(url, opts) {
  const cacheData = cache.get(url)

  if (cacheData) {
    return Promise.resolve(cacheData)
  }

  const gotOpts = Object.assign({}, opts)

  gotOpts.header = Object.assign({
    headers: {
      'User-Agent': 'https://github.com/hannoverjs/hannoverjs-api'
    }
  }, gotOpts.headers)

  return got(url, gotOpts).then((response) => {
    const body = JSON.parse(response.body)
    cache.set(url, body)
    return body
  })
}

module.exports = fetch
