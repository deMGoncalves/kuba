import * as f from '@kuba/f'
import { filter } from '@kuba/marionette'
import { paint, repaint } from '@kuba/h'
import component from './component'
import events from './events'
import policy from '@kuba/policy'

@paint(component)
@events
class Cookiebar {
  #opened

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

  @filter.isTruthy
  [component.opened] () {
    return this.#opened ??= policy.pristine
  }

  @repaint
  [events.onShow] () {
    this.#opened = f.T()
    return this
  }
}

export default Cookiebar
