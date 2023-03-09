import domain from './domain'

const cookie = new Proxy({}, {
  get (_target, key) {
    return document.cookie.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`)?.pop()
  },

  set (_target, key, value) {
    document.cookie = `${key}=${value};domain=${domain};expires=;path=/`
    return true
  }
})

export default cookie
