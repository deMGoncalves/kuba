import * as f from '@kuba/f'

class Removed {
  static exec (children) {
    return (child) =>
      children.remove(child)
  }

  static is (child, newChild) {
    return f.and(child, f.not(newChild))
  }
}

export default Removed
