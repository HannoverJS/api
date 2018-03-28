const got = require('got')

async function fetch(url, opts) {
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
