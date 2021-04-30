import * as f from '@kuba/f'
import isEntity from './isEntity'

export default (current, other) =>
  f.and(
    isEntity(current),
    isEntity(other),
    f.equal(current, other)
  )
