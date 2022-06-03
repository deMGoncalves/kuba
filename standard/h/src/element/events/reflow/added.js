import * as f from '@kuba/f'

class Added {
  static exec (that) {
    return (_, event) =>
      that.addEventListener(event.name, event.listener)
  }

  static is (current, event) {
    return f.and(f.not(current), event)
  }
}

export default Added
