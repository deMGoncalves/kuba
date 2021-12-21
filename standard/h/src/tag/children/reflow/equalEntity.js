import * as f from '@kuba/f'

class EqualEntity {
  static exec () {
    return () => null
  }

  static is (current, child) {
    return f.and(
      f.not(f.isEmpty(current.entity)),
      f.not(f.isEmpty(child.entity)),
      f.equal(current.entity, child.entity)
    )
  }
}

export default EqualEntity
