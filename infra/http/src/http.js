import * as f from '@kuba/f'
import cache from './cache'

export default new Proxy({}, {
  get (_, method) {
    return function (url) {
      const init = {
        cache,
        method
      }

      return {
        blob () {
          return fetch(url, init)
            .then(response => response.blob())
        },

        body (target) {
          f.assign(init, {
            body: JSON.stringify(target)
          })
          return this
        },

        headers (target) {
          f.assign(init, {
            headers: new Headers(target)
          })
          return this
        },

        json () {
          return fetch(url, init)
            .then(response => response.json())
        },

        mode (target) {
          f.assign(init, {
            mode: target
          })
          return this
        },

        signal (target) {
          f.assign(init, {
            signal: target
          })
        }
      }
    }
  }
})
