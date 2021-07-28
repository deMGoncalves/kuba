import * as f from '@kuba/f'

export default () =>
  f
    .from(Math.random())
    .pipe(f.toString(f.__, 32))
    .pipe(f.slice(f.__, 2))
    .done()
