import * as f from '@kuba/f'

export default (props, strings, funcs) =>
  f
    .from(f.zip(strings, funcs))
    .pipe(f.map(f.__, ([string, func = f.always('')]) => f.add(string, func(props))))
    .pipe(f.join(f.__, ''))
    .done()
