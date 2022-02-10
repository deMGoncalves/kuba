import * as f from '@kuba/f'
import real from './real'
import dolar from './dolar'

export default f.cond(
  [real.is, f.always(real)],
  [dolar.is, f.always(dolar)]
)
