import * as f from '@kuba/f'

class Changed {
  static exec (that) {
    return (_, event) =>
      that.addEventListener(event.name, event.listener)
  }

  static is (current, event) {
    return f.and(
      f.equal(current.name, event.name),
      f.different(current.listener, event.listener)
    )
  }
}

export default Changed
