import * as f from '@kuba/f'

class Changed {
  static exec (attributes) {
    return (_, newAttr) => (
      f.isNil(newAttr.value)
        ? attributes.removeAttribute(newAttr.key)
        : attributes.setAttribute(newAttr.key, newAttr.value)
    )
  }

  static is (attr, newAttr) {
    return f.and(
      f.equal(attr.key, newAttr.key),
      f.different(attr.value, newAttr.value)
    )
  }
}

export default Changed
