const CACHE = 'Kuba.1.0.2'

self.addEventListener('activate', function (event) {
  event.waitUntil(reset())
})

self.addEventListener('install', function (event) {
  event.waitUntil(precache())
})

self.addEventListener('fetch', function (event) {
  event.respondWith(fromCache(event.request))
  event.waitUntil(update(event.request))
})

function reset () {
  return caches.keys().then(function (versions) {
    return Promise.all(versions.map(function (version) {
      return (CACHE !== version) && caches.delete(version)
    }))
  })
}

function precache () {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll([
      '/'
    ])
  })
}

function fromCache (request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || fetch(request)
    })
  })
}

function update (request) {
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      /^http/.test(request.url) && cache.put(request, response)
      return response
    })
  })
}
