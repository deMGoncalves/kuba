import to from './to'

export default new Proxy({}, {
  get (_, method) {
    return function (url) {
      const init = {
        method
      }

      return {
        blob () {
          return to(
            fetch(url, init).then(response => response.blob())
          )
        },

        body (body) {
          Object.assign(init, {
            body: JSON.stringify(body)
          })
          return this
        },

        cache (cache) {
          Object.assign(init, { cache })
          return this
        },

        headers (headers) {
          Object.assign(init, {
            headers: new Headers(headers)
          })
          return this
        },

        json () {
          return to(
            fetch(url, init).then(response => response.json())
          )
        },

        mode (mode) {
          Object.assign(init, { mode })
          return this
        },

        signal (signal) {
          Object.assign(init, { signal })
          return this
        },

        text () {
          return to(
            fetch(url, init).then(response => response.text())
          )
        }
      }
    }
  }
})
