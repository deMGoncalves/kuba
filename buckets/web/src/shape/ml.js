import * as f from '@kuba/f'
import { before } from '@kuba/middleware'

const onView = before(function (shape) {
  const ml = JSON.parse(f.or(localStorage.getItem('_ml.tamanho'), '{}'))
  const champion = shape.tamanho.valor
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

  localStorage.setItem('_ml.tamanho', JSON.stringify(ml))

  return [shape]
})

export default {
  onView
}
