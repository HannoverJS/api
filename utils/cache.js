const cache = new Map()

function set(key, data) {
  cache.set(key, {
    data,
    lastUpdated: Date.now()
  })
}

exports.set = set

function get(key) {
  if (!cache.has(key)) {
    return null
  }

  const { data, lastUpdated } = cache.get(key)
  const TTL = 3600000 // 1 hour

  if ((Date.now() - lastUpdated) > TTL) {
    return null
  }

  return data
}

exports.get = get
