import * as f from '@kuba/f'
import * as settings from '@kuba/settings'
import { paint, repaint } from '@kuba/h'
import component from './component'
import events from './events'
import scroll from './scroll'

@paint(component)
@events
class Zoom {
  #alt
  #opened
  #src

  get alt () {
    return this.#alt ??= ''
  }

  get opened () {
    return this.#opened ??= f.F()
  }

  get src () {
    return this.#src
      ? `${settings.imagekit.host}/${this.#src}?tr=w-774.867,h-968`
      : ''
  }

  @repaint
  @scroll.unlock
  close () {
    this.#opened = f.F()
    return this
  }

  @repaint
  @scroll.lock
  open (src, alt) {
    this.#alt = alt
    this.#src = src
    this.#opened = f.T()
    return this
  }
}

export default Zoom
