import * as f from '@kuba/f'

class Added {
  static exec (events) {
    return (_, newE) =>
      events.addEventListener(newE.name, newE.listener)
  }

  static is (e, newE) {
    return f.and(f.not(e), newE)
  }
}

export default Added
