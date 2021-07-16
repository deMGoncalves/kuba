import * as f from '@kuba/f'

class Added {
  static exec (that) {
    return (_, child) =>
      that.append(child)
  }

  static is (current, child) {
    return f.and(f.not(current), child)
  }
}

export default Added
