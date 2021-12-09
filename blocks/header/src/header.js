import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import props from '@kuba/props'
import { urlFor } from '@kuba/router'
import component from './component'
import event from './event'
import resize from './resize'
import scroll from './scroll'

@paint(component)
@props
@resize
class Header {
  #opened

  get opened () {
    return this.#opened ?? f.F()
  }

  @repaint
  @event.toggle
  @scroll.unlock
  close () {
    this.#opened = f.F()
    return this
  }

  @repaint
  @event.toggle
  @scroll.lock
  open () {
    this.#opened = f.T()
    return this
  }

  @event.redirect
  redirectTo (page) {
    location.assign(urlFor(page))
    return this
  }
}

export default Header
