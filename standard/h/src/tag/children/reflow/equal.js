import * as f from '@kuba/f'

class Equal {
  static exec () {
    return (tag, vTag) =>
      tag.update(vTag)
  }

  static is (tag, vTag) {
    return f.and(
      f.equal(tag.type, vTag.type),
      f.equal(tag.name, vTag.name)
    )
  }
}

export default Equal
