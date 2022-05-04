import * as f from '@kuba/f'

export default new Proxy({}, {
  get (_, method) {
    return function (url) {
      const init = {
        method
      }

      return {
        blob (target) {
          return this
            .then(response => response.blob())
            .then(target)
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

        json (target) {
          return this
            .then(response => response.json())
            .then(target)
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
        },

        then (target) {
          return fetch(url, init)
            .then(target)
        }
      }
    }
  }
})
