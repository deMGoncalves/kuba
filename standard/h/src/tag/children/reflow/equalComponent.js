import * as f from '@kuba/f'
import isComponent from './isComponent'

class EqualEntity {
  static exec () {
    return () => null
  }

  static is (current, child) {
    return f.and(
      isComponent(current),
      isComponent(child),
      f.isTruthy(current.entity),
      f.isTruthy(child.entity),
      f.equal(current.entity, child.entity)
    )
  }
}

export default EqualEntity
