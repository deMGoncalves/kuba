import * as f from '@kuba/f'

export default (shape) => {
  const ml = JSON.parse(f.or(localStorage.getItem('_ml.marca'), '{}'))
  const champion = shape.marca.nome
  const losers = f
    .from(ml)
    .pipe(f.keys)
    .pipe(f.filter(f.__, f.different(champion)))
    .done()

  f.forEach(losers, (loser) => (
    f.assign(ml, {
      [loser]: f.max(f.dec(f.or(ml[loser], 0)), 0)
    })
  ))

  f.assign(ml, {
    [champion]: f.min(f.add(f.or(ml[champion], 0), 3), 9)
  })

  localStorage.setItem('_ml.marca', JSON.stringify(ml))
}
