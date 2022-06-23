import * as f from '@kuba/f'

class Different {
  static exec (children) {
    return (child, newChild) =>
      children.replace(child, newChild)
  }

  static is (child, newChild) {
    return f.or(
      f.different(child.type, newChild.type),
      f.different(child.name, newChild.name)
    )
  }
}

export default Different
