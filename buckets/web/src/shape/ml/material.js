import * as f from '@kuba/f'

export default (shape) => {
  const ml = JSON.parse(f.or(localStorage.getItem('_ml.material'), '{}'))
  const champions = f
    .from(shape?.material)
    .pipe(f.or(f.__, []))
    .pipe(f.map(f.__, f.prop('valor')))
    .done()

  const losers = f
    .from(ml)
    .pipe(f.keys)
    .pipe(f.filter(f.__, f.compose(f.not, f.includes(champions))))
    .done()

  f.forEach(losers, (loser) => (
    f.assign(ml, {
      [loser]: f.max(f.dec(f.or(ml[loser], 0)), 0)
    })
  ))

  f.forEach(champions, (champion) => (
    f.assign(ml, {
      [champion]: f.min(f.add(f.or(ml[champion], 0), 3), 9)
    })
  ))

  localStorage.setItem('_ml.material', JSON.stringify(ml))
}
