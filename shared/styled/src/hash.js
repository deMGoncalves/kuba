import * as f from '@kuba/f'

export default () =>
  f
    .from(f.random())
    .pipe(number => f.toString(number, 32))
    .pipe(f.add('_'))
    .done()
