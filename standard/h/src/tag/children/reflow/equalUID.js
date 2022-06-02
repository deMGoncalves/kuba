import * as f from '@kuba/f'

class EqualUID {
  static exec () {
    return () => null
  }

  static is (child, newChild) {
    return f.and(
      f.not(f.isEmpty(child.uid)),
      f.not(f.isEmpty(newChild.uid)),
      f.equal(child.uid, newChild.uid)
    )
  }
}

export default EqualUID
