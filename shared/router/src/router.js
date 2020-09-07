import * as f from '@rex/f'

export default (path, listener) =>
  f.test(path, location.pathname) && listener(...path.exec(location.pathname).slice(1))
