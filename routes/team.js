const teamData = [
  {
    name: 'Christoph Burgdorf',
    job: 'Trainer',
    company: 'thoughtram',
    twitter: 'cburgdorf'
  },
  {
    name: 'Pascal Precht',
    job: 'Trainer',
    company: 'thoughtram',
    twitter: 'PascalPrecht'
  },
  {
    name: 'Jan-Oliver Pantel',
    job: 'Sr. Software Engineer',
    company: 'NewStore Inc.',
    twitter: 'JanPantel'
  },
  {
    name: 'Robin Thrift',
    job: 'Software Engineer',
    company: 'NewStore Inc.',
    twitter: 'RobinThrift'
  },
  {
    name: 'Tim Cheung',
    job: 'Software Engineer',
    company: 'NewStore Inc.',
    twitter: 'timche_'
  }
]

function team(req, res) {
  res.send(teamData)
}

module.exports = team
