import * as f from '@kuba/f'

class Removed {
  static exec (attributes) {
    return (attr) =>
      attributes.removeAttribute(attr.key)
  }

  static is (attr, newAttr) {
    return f.and(attr, f.not(newAttr))
  }
}

export default Removed
