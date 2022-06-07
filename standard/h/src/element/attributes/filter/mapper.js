import * as f from '@kuba/f'

const mapper = (name) => (
  f
    .from(name)
    .pipe(f.exec(/(?<attribute>[a-z-]+):?(?<filter>[a-z]+)?$/i))
    .pipe(f.slice(f.__, 1, 3))
    .done()
)

export default f.memoize(mapper)
