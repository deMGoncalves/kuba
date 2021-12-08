import * as f from '@kuba/f'
import * as settings from '@kuba/settings'
import cookie from '@kuba/cookie'

export default () =>
  f.or(cookie.getItem('lang'), settings.lang.fallback)
