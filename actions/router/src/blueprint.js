import * as f from '@kuba/f'
import router from './router'

export default (module, prefix) =>
  (url, listener) =>
    router(
      f.add(prefix, f.replace(url, /^\/$/, '')),
      f.assign(listener, { module })
    )
