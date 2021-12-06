import * as f from '@kuba/f'
import stub from './stub'

export default (strings, funcs, props = {}) =>
  f
    .from(f.zip(strings, funcs))
    .pipe(f.map(f.__, ([string, func = stub]) => f.add(string, func(props))))
    .pipe(f.join(f.__, ''))
    .done()
