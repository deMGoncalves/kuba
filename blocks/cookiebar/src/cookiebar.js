import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import cookie from '@kuba/cookie'
import component from './component'
import events from './events'

@paint(component)
@events
class Cookiebar {
  #opened

  get opened () {
    return this.#opened ??= f.equal(
      cookie.getItem(Cookiebar.key),
      undefined
    )
  }

  static get key () {
    return '_kuba.cookie'
  }

  @repaint
  aceitar () {
    cookie.setItem(Cookiebar.key, 'yes')
    this.#opened = f.F()
    return this
  }

  @repaint
  recusar () {
    cookie.setItem(Cookiebar.key, 'no')
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
