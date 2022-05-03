import * as f from '@kuba/f'
import get from './get'
import hub from './hub'
import set from './set'

export default (serie, champions) => {
  const data = get(serie)

  const losers = f
    .from(data)
    .pipe(f.keys)
    .pipe(f.filter(f.__, f.compose(f.not, f.includes(champions))))
    .done()

  f.forEach(losers, (loser) => (
    f.assign(data, {
      [loser]: f.max(f.dec(f.or(data[loser], 0)), 0)
    })
  ))

  f.forEach(champions, (champion) => (
    f.assign(data, {
      [champion]: f.min(f.add(f.or(data[champion], 0), hub.INCREMENT_POINTS), hub.MAX_POINT)
    })
  ))

  set(serie, data)
}
