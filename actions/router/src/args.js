export default new Proxy({}, {
  get: (_, key) =>
    new URLSearchParams(location.search).get(key)
})
