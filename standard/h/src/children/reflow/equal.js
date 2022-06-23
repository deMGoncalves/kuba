import * as f from '@kuba/f'

class Equal {
  static exec () {
    return (child, newChild) =>
      child.update(newChild)
  }

  static is (child, newChild) {
    return f.and(
      f.equal(child.type, newChild.type),
      f.equal(child.name, newChild.name)
    )
  }
}

export default Equal
