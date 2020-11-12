import * as f from '@rex/f'
import pathname from './pathname'
import urls from './urls'

const router = (path, listener) => (
  f.assign(urls, {
    [listener.name]: f.replace(String(path), /^\/|\^|\\|\$|\/$/g, '')
  }),

  f.test(path, pathname) && listener(...f.slice(f.exec(path, pathname), 1))
)

export default f.curry(router)
