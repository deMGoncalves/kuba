import * as f from '@kuba/f'

export default f.cond(
  [f.has('symbol'), f.always('94')],
  [f.T, f.always('455')]
)
