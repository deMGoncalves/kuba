import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
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
    return this.#src ??= ''
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
