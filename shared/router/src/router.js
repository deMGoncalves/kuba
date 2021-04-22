import * as f from '@kuba/f'
import pathname from './pathname'
import urls from './urls'

const router = (path, listener) => (
  f.assign(urls, {
    [listener.name]: f.replace(String(path), /^\/|\^|\\|\$|\/$/g, '')
  }),

  router.pristine && (
    f.test(path, pathname) && (
      listener(...f.slice(f.exec(path, pathname), 1)),
      f.assign(router, { pristine: f.F() })
    )
  )
)

export default f.assign(router, { pristine: f.T() })
