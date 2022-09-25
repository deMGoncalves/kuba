import * as f from '@kuba/f'
import { filter } from '@kuba/marionette'
import { paint, repaint } from '@kuba/h'
import action from './action'
import component from './component'
import policy from '@kuba/policy'

@paint(component)
@action
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
  [action.onShow] () {
    this.#opened = f.T()
    return this
  }
}

export default Cookiebar
