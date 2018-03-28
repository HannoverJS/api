import test from 'ava'
import talks from '../routes/talks'

test('extracts name, occupation, social from markdown correctly', t => {
  const NAME = 'John Doe'
  const OCCUPATION = 'Developer at Foo'
  const SOCIAL_NAME = '@JohnDoe'
  const SOCIAL_LINK = 'https://twitter.com/JohnDoe'
  const DESCRIPTION = 'Lorem Ipsum'

  const {
    name,
    occupation,
    socialName,
    socialUrl,
    description
  } = talks.extractTalk(
    `##### ${NAME}\n###### ${OCCUPATION}\n###### [${SOCIAL_NAME}](${SOCIAL_LINK})\n\n${DESCRIPTION}`
  )

  t.is(name, NAME)
  t.is(occupation, OCCUPATION)
  t.is(socialName, SOCIAL_NAME)
  t.is(socialUrl, SOCIAL_LINK)
  t.is(description, DESCRIPTION)
})
