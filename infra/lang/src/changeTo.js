import cookie from '@kuba/cookie'
import key from './key'

export default (value) =>
  cookie.setItem(key, value)
