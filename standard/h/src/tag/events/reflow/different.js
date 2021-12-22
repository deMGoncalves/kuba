import * as f from '@kuba/f'

class Different {
  static exec (that) {
    return (current, event) =>
      that
        .removeEventListener(current.name)
        .addEventListener(event.name, event.listener)
  }

  static is (current, event) {
    return f.different(current.name, event.name)
  }
}

export default Different
