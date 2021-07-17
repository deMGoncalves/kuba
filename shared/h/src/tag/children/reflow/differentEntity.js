import * as f from '@kuba/f'
import isEntity from './isEntity'

class DifferentEntity {
  static exec (that) {
    return (current, child) =>
      that.replace(current, child)
  }

  static is (current, child) {
    return f.and(
      isEntity(current),
      isEntity(child),
      f.different(current, child)
    )
  }
}

export default DifferentEntity
