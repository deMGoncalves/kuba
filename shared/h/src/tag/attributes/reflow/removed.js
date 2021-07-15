import * as f from '@kuba/f'

class Removed {
  static exec (that) {
    return (current) =>
      that.removeAttribute(current.key)
  }

  static is (current, attribute) {
    return f.and(current, f.not(attribute))
  }
}

export default Removed
