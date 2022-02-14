import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import events from './events'

@paint(component)
@events
class Cookiebar {
  #opened

  get opened () {
    return this.#opened ??= f.equal(
      localStorage.getItem(Cookiebar.key),
      null
    )
  }

  static get key () {
    return '_kuba.cookie'
  }

  @repaint
  aceitar () {
    localStorage.setItem(Cookiebar.key, 'yes')
    this.#opened = f.F()
    return this
  }

  @repaint
  recusar () {
    localStorage.setItem(Cookiebar.key, 'no')
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
