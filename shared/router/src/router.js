import * as f from '@rex/f'
import pathname from './pathname'

const router = (path, listener) =>
  f.test(path, pathname) && listener(...f.slice(f.exec(path, pathname), 1))

export default f.curry(router)
