import * as f from '@kuba/f'

class Added {
  static exec (children) {
    return (_tag, vTag) =>
      children.append(vTag)
  }

  static is (tag, vTag) {
    return f.and(f.not(tag), vTag)
  }
}

export default Added
