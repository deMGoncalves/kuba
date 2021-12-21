import * as f from '@kuba/f'

class DifferentEntity {
  static exec (that) {
    return (current, child) =>
      that.replace(current, child)
  }

  static is (current, child) {
    return f.different(current.entity, child.entity)
  }
}

export default DifferentEntity
