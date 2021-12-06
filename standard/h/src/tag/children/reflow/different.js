import * as f from '@kuba/f'

class Different {
  static exec (that) {
    return (current, child) =>
      that.replace(current, child)
  }

  static is (current, child) {
    return f.or(
      f.different(current.type, child.type),
      f.different(current.name, child.name)
    )
  }
}

export default Different
