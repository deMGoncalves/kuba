import * as f from '@kuba/f'

class Removed {
  static exec (that) {
    return (current) =>
      that.removeEventListener(current.name)
  }

  static is (current, event) {
    return f.and(current, f.not(event))
  }
}

export default Removed
