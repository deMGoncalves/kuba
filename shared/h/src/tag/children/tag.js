import * as f from '@kuba/f'

export default (current) =>
  f.or(current[f.magic('tag')], current)
