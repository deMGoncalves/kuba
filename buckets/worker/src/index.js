import routers from './routers'

addEventListener('fetch', (e) => {
  e.respondWith(routers.handle(e.request))
})
