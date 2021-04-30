import * as f from '@kuba/f'

export default (target) =>
  f.not(target[f.magic('isNode')])
