import * as f from '@kuba/f'

class EqualEntity {
  static exec () {
    return f.always(null)
  }

  static is (child, newChild) {
    return f.and(
      f.not(f.isEmpty(child.entity)),
      f.not(f.isEmpty(newChild.entity)),
      f.equal(child.entity, newChild.entity)
    )
  }
}

export default EqualEntity
