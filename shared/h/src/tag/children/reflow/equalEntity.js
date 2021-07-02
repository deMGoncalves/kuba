import * as f from '@kuba/f'
import isEntity from './isEntity'

export default (current, child) =>
  f.and(
    isEntity(current),
    isEntity(child),
    f.equal(current, child)
  )
