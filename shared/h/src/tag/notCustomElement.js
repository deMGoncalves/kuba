import * as f from '@kuba/f'

export default (tag) =>
  f.not(f.test(/^\w+-/, tag.name))
