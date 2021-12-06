import * as f from '@kuba/f'
import router from './router'

export default (module) =>
  (path, listener) =>
    router(
      `/${module}${f.replace(path, /^\/$/, '')}`,
      f.assign(listener, {
        name: `${module}.${listener.name}`
      })
    )
