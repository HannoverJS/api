function addOrganizer(name, job, company, twitter) {
  return {
    name,
    job,
    company,
    twitter: `@${twitter}`
  }
}

function organizers(req, res) {
  return res.send([
    addOrganizer('Christoph Burgdorf', 'Trainer', 'thoughtram', 'cburgdorf'),
    addOrganizer('Pascal Precht', 'Trainer', 'thoughtram', 'PascalPrecht'),
    addOrganizer(
      'Jan-Oliver Pantel',
      'Engineering Manager',
      'NewStore',
      'JanPantel'
    ),
    addOrganizer(
      'Robin Thrift',
      'Computer Science Student',
      'Leibniz University of Hanover',
      'RobinThrift'
    ),
    addOrganizer('Tim Cheung', 'Software Engineer', 'NewStore', 'timche_')
  ])
}

module.exports = organizers
