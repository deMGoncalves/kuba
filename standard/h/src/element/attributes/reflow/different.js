import * as f from '@kuba/f'

class Different {
  static exec (attributes) {
    return (attr, newAttr = {}) =>
      attributes
        .removenAttribute(attr.key)
        .setAttribute(newAttr.key, newAttr.value)
  }

  static is (attr, newAttr) {
    return f.different(attr.key, newAttr.key)
  }
}

export default Different
