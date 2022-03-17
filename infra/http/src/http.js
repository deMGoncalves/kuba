import * as f from '@kuba/f'

export default new Proxy({}, {
  get (_, method) {
    return function (url) {
      const init = {
        method
      }

      return {
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

        then (callback) {
          return fetch(url, init).then(callback)
        },

        mode (target) {
          f.assign(init, {
            mode: target
          })
          return this
        }
      }
    }
  }
})
