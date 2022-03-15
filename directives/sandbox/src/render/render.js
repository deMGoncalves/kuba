import * as f from '@kuba/f'
import outside from './outside'
import self from './self'

export default (sandbox) =>
  f.cond(
    [self.is, self.execute(sandbox)],
    [outside.is, outside.execute]
  )
