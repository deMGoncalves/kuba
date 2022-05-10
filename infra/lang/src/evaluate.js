import * as f from '@kuba/f'

export default f.cond(
  [f.test(/^en/i), f.T],
  [f.test(/^es/i), f.T],
  [f.test(/^pt/i), f.T]
)
