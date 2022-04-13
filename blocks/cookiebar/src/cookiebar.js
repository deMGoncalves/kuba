import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import component from './component'
import events from './events'
import policy from '@kuba/policy'

@paint(component)
@events
class Cookiebar {
  #opened

  get opened () {
    return this.#opened ??= policy.pristine
  }

  @repaint
  aceitar () {
    policy.accept()
    this.#opened = f.F()
    return this
  }

  @repaint
  recusar () {
    policy.decline()
    this.#opened = f.F()
    return this
  }

  @repaint
  [events.onShow] () {
    this.#opened = f.T()
    return this
  }
}

export default Cookiebar
