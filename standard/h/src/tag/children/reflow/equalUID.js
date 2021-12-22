import * as f from '@kuba/f'

class EqualUID {
  static exec () {
    return () => null
  }

  static is (tag, vTag) {
    return f.and(
      f.not(f.isEmpty(tag.uid)),
      f.not(f.isEmpty(vTag.uid)),
      f.equal(tag.uid, vTag.uid)
    )
  }
}

export default EqualUID
