export default new Proxy(
  new URLSearchParams(location.search),
  {
    get: (target, key) => target.get(key)
  }
)
