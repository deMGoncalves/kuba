import * as f from '@kuba/f'
import isComponent from './isComponent'

class DifferentEntity {
  static exec (that) {
    return (current, child) =>
      that.replace(current, child)
  }

  static is (current, child) {
    return f.and(
      isComponent(current),
      isComponent(child),
      f.different(current.entity, child.entity)
    )
  }
}

export default DifferentEntity
