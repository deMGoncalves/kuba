import * as f from '@kuba/f'
import reducer from './reducer'

export default (wc, value) => (
  wc.nextId(),
  [
    wc.state[wc.id] = f.or(wc.state[wc.id], value),
    reducer(wc, wc.id)
  ]
)
