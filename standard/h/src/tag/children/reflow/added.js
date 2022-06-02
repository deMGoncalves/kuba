import * as f from '@kuba/f'

class Added {
  static exec (children) {
    return (_child, newChild) =>
      children.append(newChild)
  }

  static is (child, newChild) {
    return f.and(f.not(child), newChild)
  }
}

export default Added
