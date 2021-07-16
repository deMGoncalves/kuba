import * as f from '@kuba/f'

class Removed {
  static exec (that) {
    return (current) =>
      that.remove(current)
  }

  static is (current, child) {
    return f.and(current, f.not(child))
  }
}

export default Removed
