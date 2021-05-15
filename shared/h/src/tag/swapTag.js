import * as f from '@kuba/f'

export default (current, other) =>
  other[f.magic('entity')]?.[f.magic('element')] = current
