import * as f from '@rex/f'

export default (path, listener) =>
  window.addEventListener('DOMContentLoaded', () =>
    (f.test(path, location.pathname) && listener(...path.exec(location.pathname).slice(1))))
