import * as f from '@kuba/f'

class Changed {
  static exec (that) {
    return (_, attribute) => (
      f.isNil(attribute.value)
        ? that.removeAttribute(attribute.key)
        : that.setAttribute(attribute.key, attribute.value)
    )
  }

  static is (current, attribute) {
    return f.and(
      f.equal(current.key, attribute.key),
      f.different(current.value, attribute.value)
    )
  }
}

export default Changed
