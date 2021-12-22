import * as f from '@kuba/f'

class Different {
  static exec (children) {
    return (tag, vTag) =>
      children.replace(tag, vTag)
  }

  static is (tag, vTag) {
    return f.or(
      f.different(tag.type, vTag.type),
      f.different(tag.name, vTag.name)
    )
  }
}

export default Different
