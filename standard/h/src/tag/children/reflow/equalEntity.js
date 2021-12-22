import * as f from '@kuba/f'

class EqualEntity {
  static exec () {
    return () => null
  }

  static is (tag, vTag) {
    return f.and(
      f.not(f.isEmpty(tag.entity)),
      f.not(f.isEmpty(vTag.entity)),
      f.equal(tag.entity, vTag.entity)
    )
  }
}

export default EqualEntity
