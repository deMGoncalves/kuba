import * as f from '@kuba/f'

export default () =>
  f
    .from(Math.random())
    .pipe(value => f.toString(value, 32))
    .pipe(f.slice(f.__, 2))
    .pipe(f.add('_'))
    .done()
