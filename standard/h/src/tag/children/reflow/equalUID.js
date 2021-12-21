import * as f from '@kuba/f'

class EqualUID {
  static exec () {
    return () => null
  }

  static is (current, child) {
    return f.and(
      f.not(f.isEmpty(current.uid)),
      f.not(f.isEmpty(child.uid)),
      f.equal(current.uid, child.uid)
    )
  }
}

export default EqualUID
