export default new Proxy(localStorage, {
  get (target, key) {
    return JSON.parse(target.getItem(key) ?? 'null')
  },

  set (target, key, value) {
    return target.setItem(key, JSON.stringify(value)), true
  }
})
