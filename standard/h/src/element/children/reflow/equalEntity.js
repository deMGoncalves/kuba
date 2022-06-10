import * as f from '@kuba/f'

class EqualEntity {
  static exec () {
    return f.always(null)
  }

  static is (child, newChild) {
    return f.and(
      f.not(f.isNil(child.entity)),
      f.not(f.isNil(newChild.entity)),
      f.equal(child.entity, newChild.entity)
    )
  }
}

export default EqualEntity
