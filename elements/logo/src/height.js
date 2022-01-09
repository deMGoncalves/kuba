import * as f from '@kuba/f'

export default f.cond(
  [f.has('small'), f.always('18px')],
  [f.has('large'), f.always('40px')],
  [f.T, f.always('28px')]
)
