import * as f from '@kuba/f'
import cookie from '@kuba/cookie'
import settings from './settings'

export default () =>
  f.or(cookie.getItem('lang'), settings.fallback)
