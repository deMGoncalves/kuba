import * as f from '@kuba/f'

export default f.cond(
  [f.has('symbol'), f.always(undefined)],
  [f.has('small'), f.always('43.85')],
  [f.has('large'), f.always('109.633')],
  [f.T, f.always('76.75')]
)
