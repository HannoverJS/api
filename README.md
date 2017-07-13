# hannoverjs-api

[![Build Status](https://travis-ci.org/HannoverJS/hannoverjs-api.svg?branch=master)](https://travis-ci.org/HannoverJS/hannoverjs-api) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> RESTful API for HannoverJS using Node.js & Express

Hosted on and deployed with [`now`](https://zeit.co/now) by [▲ZEIT](https://zeit.co).

## Usage

### Root URL

```
https://hannoverjs-api.now.sh
```

### Ressources

#### Get Upcoming Events

Gets upcoming events sorted by date.

##### URL

```
GET https://hannoverjs-api.now.sh/events
```

##### Example Response

```json
[
  {
    "date": "2017-08-24T16:30:00.000Z",
    "updated_at": "2016-11-24T20:37:35.000Z",
    "meetup_url": "https://www.meetup.com/HannoverJS/events/240716948/",
    "venue": {
      "name": "NewStore",
      "lat": 52.3844108581543,
      "lon": 9.753049850463867,
      "city": "Hannover",
      "country": "de",
      "localized_country_name": "Germany",
      "how_to_find_us": "Ring the bell \"HannoverJS\", you can find us on the 2nd floor."
    }
  },
  ...
]
```

#### Get Upcoming Talks

Gets upcoming talks.

##### URL

```
GET https://hannoverjs-api.now.sh/talks
```

##### Example Response

```json
[
  {
    "title": "Intro To Property Based Testing (in JavaScript)",
    "description": "Property based testing is a testing method often found in functional languages. If used correctly it can achieve a much greater code coverage compared to \"conventional testing\". Unfortunately this way of testing your functions is not widely known and often shrouded in theory heavy descriptions and jargong. I want to break it down and show you how you can test the properties of your JavaScript functions without loosing you head.",
    "date": "2017-08-24T17:00:00.000Z",
    "updated_at": "2017-07-13T14:41:04Z",
    "speaker": {
      "name": "Robin Thrift",
      "avatar_url": "https://avatars3.githubusercontent.com/u/733741?v=3",
      "occupation": "Computer Science Student",
      "twitter": "@RobinThrift",
      "twitter_url": "https://twitter.com/RobinThrift"
    },
    ...
  }
]
```

#### Get Organizers

Gets the organizers.

##### URL

```
GET https://hannoverjs-api.now.sh/organizers
```

##### Example Response

```json
[
  {
    "name": "Christoph Burgdorf",
    "job": "Trainer",
    "company": "thoughtram",
    "twitter": "@cburgdorf"
  },
  ...
]
```
