import * as f from '@kuba/f'

class Added {
  static exec (that) {
    return (_, attribute) =>
      that.setAttribute(attribute.key, attribute.value)
  }

  static is (current, attribute) {
    return f.and(f.not(current), attribute)
  }
}

export default Added
