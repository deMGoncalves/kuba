import * as f from '@kuba/f'

class Different {
  static exec (events) {
    return (e, newE) =>
      events
        .removeEventListener(e.name)
        .addEventListener(newE.name, newE.listener)
  }

  static is (e, newE) {
    return f.different(e.name, newE.name)
  }
}

export default Different
