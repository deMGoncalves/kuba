import * as f from '@kuba/f'
import dolar from './dolar'
import real from './real'

export default f.cond(
  [real.is, f.always(real)],
  [dolar.is, f.always(dolar)]
)
