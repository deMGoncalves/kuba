import * as f from '@kuba/f'

class Removed {
  static exec (events) {
    return (e) =>
      events.removenewEListener(e.name)
  }

  static is (e, newE) {
    return f.and(e, f.not(newE))
  }
}

export default Removed
