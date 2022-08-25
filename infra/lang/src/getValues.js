import { args } from '@kuba/router'
import cookie from '@kuba/cookie'
import hub from './hub'
import key from './key'

export default () => [
  cookie.getItem(key),
  args.lang,
  // navigator.language,
  hub.FALLBACK
]
