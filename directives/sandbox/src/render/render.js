import * as f from '@kuba/f'
import self from './self'

export default (sandbox) =>
  f.cond(
    [self.is, self.execute(sandbox)]
  )
