import * as f from '@kuba/f'

export default (current, attribute) =>
  f.and(
    f.equal(current.key, attribute.key),
    f.different(current.value, attribute.value)
  )
