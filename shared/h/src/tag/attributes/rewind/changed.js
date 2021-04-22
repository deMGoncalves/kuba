import * as f from '@kuba/f'

export default (current, other) =>
  f.and(
    f.equal(current.key, other.key),
    f.different(current.value, other.value)
  )
