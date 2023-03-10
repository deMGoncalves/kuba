export default new Proxy({}, {
  get: (target, prop) => (target[prop] ??= Symbol(prop))
})
