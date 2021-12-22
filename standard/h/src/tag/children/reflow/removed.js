import * as f from '@kuba/f'

class Removed {
  static exec (children) {
    return (tag) =>
      children.remove(tag)
  }

  static is (tag, vTag) {
    return f.and(tag, f.not(vTag))
  }
}

export default Removed
