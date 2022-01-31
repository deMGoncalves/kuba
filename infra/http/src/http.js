import headers from './headers'

export default new Proxy({}, {
  get (_, method) {
    return (url, body = {}) =>
      fetch(url, { body: JSON.stringify(body), headers: new Headers(headers), method })
  }
})
