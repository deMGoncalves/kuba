import * as f from '@kuba/f'

class Added {
  static exec (attributes) {
    return (_, newAttr) =>
      attributes.setAttribute(newAttr.key, newAttr.value)
  }

  static is (attr, newAttr) {
    return f.and(f.not(attr), newAttr)
  }
}

export default Added
