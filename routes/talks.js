const fetch = require('../utils/fetch')

const GITHUB_ISSUES = 'https://api.github.com/repos/HannoverJS/talks/issues?state=open&labels=Upcoming%20Talk'

function talks(req, res) {
  fetch(GITHUB_ISSUES).then(t => res.send(t))
}

module.exports = talks
