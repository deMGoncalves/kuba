import * as f from '@kuba/f'
import cookie from '@kuba/cookie'

export default {
  get value () {
    return f.or(cookie.getItem('kuba.lang'), __settings.lang.fallback)
  },

  changeTo (value) {
    cookie.setItem('kuba.lang', value)
    return this
  }
}
