import * as f from '@kuba/f'
import routers from './routers'

addEventListener('fetch', (e) => {
  e.respondWith(
    routers
      .handle(e.request)
      .then((response) => (
        f.assign(response.headers, {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS'
        }),
        response
      ))
  )
})
