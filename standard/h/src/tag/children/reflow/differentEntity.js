import * as f from '@kuba/f'

class DifferentEntity {
  static exec (children) {
    return (tag, vTag) =>
      children.replace(tag, vTag)
  }

  static is (tag, vTag) {
    return f.different(tag.entity, vTag.entity)
  }
}

export default DifferentEntity
