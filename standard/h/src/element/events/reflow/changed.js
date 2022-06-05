import * as f from '@kuba/f'

class Changed {
  static exec (events) {
    return (_, newE) =>
      events.addnewEListener(newE.name, newE.listener)
  }

  static is (e, newE) {
    return f.and(
      f.equal(e.name, newE.name),
      f.different(e.listener, newE.listener)
    )
  }
}

export default Changed
