import cookie from '@kuba/cookie'

export default (value) =>
  cookie.setItem('lang', value)
