const twitter = require('../utils/twitter')

async function getOrganizers(twitterUsernames) {
  const organizers = await twitter(
    `users/lookup.json?screen_name=${twitterUsernames.join(',')}`
  )

  return organizers.map(
    ({
      name,
      description,
      profile_image_url,
      profile_image_url_https,
      screen_name
    }) => ({
      name,
      description,
      twitter: {
        profile_image_url: profile_image_url.replace('_normal', ''),
        profile_image_url_https: profile_image_url_https.replace('_normal', ''),
        screen_name
      }
    })
  )
}
module.exports = async (req, res) =>
  res.send(
    await getOrganizers([
      'cburgdorf',
      'PascalPrecht',
      'JanPantel',
      'RobinThrift',
      'timche_'
    ])
  )
