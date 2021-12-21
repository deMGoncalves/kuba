import * as f from '@kuba/f'

class Equal {
  static exec () {
    return (current, child) =>
      current.reflow(child)
  }

  static is (current, child) {
    return f.and(
      f.equal(current.type, child.type),
      f.equal(current.name, child.name)
    )
  }
}

export default Equal
