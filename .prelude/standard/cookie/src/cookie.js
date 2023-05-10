import echo from '@kuba/echo'

const cookie = new Proxy({}, {
  get (_target, key) {
    return document.cookie.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`)?.pop()
  },

  set (_target, key, value) {
    document.cookie = `${key}=${value};domain=${process.env.COOKIE_DOMAIN};expires=;path=/`
    echo.emit(`cookie:${key}`, value)
    return true
  }
})

export default cookie
