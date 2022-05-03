import * as f from '@kuba/f'
import get from './get'

const evalute = (x, y) => (
  f.gte(x[1], y[1]) ? x : y
)

export default (serie) =>
  f
    .from(get(serie))
    .pipe(f.or(f.__, []))
    .pipe(f.entries)
    .pipe(f.reduce(f.__, evalute, []))
    .pipe(f.prop('[0]'))
    .done()
