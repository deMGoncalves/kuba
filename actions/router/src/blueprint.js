import * as f from '@kuba/f'
import router from './router'

export default (module, prefix) =>
  (path, listener) =>
    router(
      f.add(prefix, f.replace(path, /^\/$/, '')),
      f.assign(listener, { module })
    )
