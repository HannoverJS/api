# HannoverGophers-api

> RESTful API for Hannover Gophers

## Usage

### Create `.env` file

```
API_VERSION=1.0
API_PORT=8000
LOG_LEVEL=debug
MEETUP_API_KEY=<meetup-api-key>
```

### Root URL

```
https://localhost:<port>.
```

### Ressources

#### Get Upcoming Events

Gets upcoming events sorted by date.

##### URL

```
GET https://localhost:<port>/events
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
GET https://localhost:<port>/talks
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
GET https://localhost:<port>/organizers
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