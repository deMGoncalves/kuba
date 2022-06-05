import * as f from '@kuba/f'

class Different {
  static exec (events) {
    return (e, newE) =>
      events
        .removenewEListener(e.name)
        .addnewEListener(newE.name, newE.listener)
  }

  static is (e, newE) {
    return f.different(e.name, newE.name)
  }
}

export default Different
