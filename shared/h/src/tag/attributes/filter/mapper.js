import * as f from '@kuba/f'

export default (name) =>
  f
    .from(name)
    .pipe(f.exec(/([a-z-]+):?([a-z]+)?$/i))
    .pipe(f.slice(f.__, 1, 3))
    .done()
