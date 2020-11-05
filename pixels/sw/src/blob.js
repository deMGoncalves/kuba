export default new Blob(
  [`
    const VERSION = 'Rex.SW.0.0.1'

    const cache = (request) =>
      caches
        .open(VERSION)
        .then((cache) =>
          cache
            .match(request)
            .then((response) =>
              (response || fetch(request))))

    const reset = () =>
      caches
        .keys()
        .then((versions) =>
          Promise
            .all(
              versions
                .map((version) =>
                  ((VERSION !== version) && caches.delete(version)))
            ))

    const update = (request) =>
      caches
        .open(VERSION)
        .then((cache) =>
          fetch(request)
            .then((response) =>
              cache.put(request, response)))

    self.addEventListener('activate', (event) =>
      event.waitUntil(reset()))

    self.addEventListener('install', (event) =>
      console.log('SW instaled', event))

    self.addEventListener('fetch', (event) => {
      event.respondWith(cache(event.request))
      event.waitUntil(update(event.request))
    })
  `],
  { type: 'application/javascript' }
)
