import * as f from '@kuba/f'

export default f.cond(
  [f.has('symbol'), f.always(undefined)],
  [f.has('small'), f.always('43.85px')],
  [f.has('large'), f.always('109.633px')],
  [f.T, f.always('76.75px')]
)
