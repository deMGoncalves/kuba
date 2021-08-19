export default (wc) =>
  new Proxy(wc, {
    get: (_target, key) => wc.getAttribute(key)
  })
