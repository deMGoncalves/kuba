import * as f from '@gotenks/f'
import router from './router'

export default (module, prefix) =>
  (path, listener) =>
    router(
      f.add(prefix, f.replace(path, /^\/$/, '')),
      f.assign(listener, { module })
    )
