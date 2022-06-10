import * as f from '@kuba/f'

class DifferentEntity {
  static exec (children) {
    return (child, newChild) =>
      children.replace(child, newChild)
  }

  static is (child, newChild) {
    return f.different(child.entity, newChild.entity)
  }
}

export default DifferentEntity
