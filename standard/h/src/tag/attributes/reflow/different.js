import * as f from '@kuba/f'

class Different {
  static exec (that) {
    return (current, attribute = {}) =>
      that
        .removeAttribute(current.key)
        .setAttribute(attribute.key, attribute.value)
  }

  static is (current, attribute) {
    return f.different(current.key, attribute.key)
  }
}

export default Different
