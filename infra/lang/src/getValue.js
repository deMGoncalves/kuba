import * as f from '@kuba/f'
import cookie from '@kuba/cookie'
import key from './key'
import schema from './schema.json'

export default () =>
  f.or(cookie.getItem(key), schema.fallback)
