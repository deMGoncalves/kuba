import echo from '@kuba/echo'

export default new Proxy(localStorage, {
  get (target, key) {
    return JSON.parse(target.getItem(key) ?? 'null')
  },

  set (target, key, value) {
    target.setItem(key, JSON.stringify(value))
    echo.emit('local:key', value)
    return true
  }
})
