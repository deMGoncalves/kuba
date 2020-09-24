import * as f from '@rex/f'
import pathname from './pathname'
import ready from './ready'

const router = (path, listener) =>
  ready(() =>
    f.test(path, pathname) && listener(...f.slice(f.exec(path, pathname), 1)))

export default f.curry(router)
