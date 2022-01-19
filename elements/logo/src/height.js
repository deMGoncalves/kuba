import * as f from '@kuba/f'

export default f.cond(
  [f.has('symbol'), f.always(undefined)],
  [f.has('small'), f.always('18')],
  [f.has('large'), f.always('40')],
  [f.T, f.always('28')]
)
