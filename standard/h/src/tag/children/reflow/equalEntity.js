import * as f from '@kuba/f'
import isEntity from './isEntity'

class EqualEntity {
  static exec () {
    return () => null
  }

  static is (current, child) {
    return f.and(
      isEntity(current),
      isEntity(child),
      f.equal(current, child)
    )
  }
}

export default EqualEntity
