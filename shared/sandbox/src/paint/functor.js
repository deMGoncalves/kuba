import * as f from '@rex/f'
import extend from './extend'
import isPristine from './isPristine'

export default (state, ...args) => (
  (isPristine(state) && extend(state, ...args)),
  state[f.magic('__element__')]
)
