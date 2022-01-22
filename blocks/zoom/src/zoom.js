import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import echo from '@kuba/echo'
import effect from './effect'

@paint(component)
@effect
class Zoom {
  #opened
  #src

  get opened () {
    return this.#opened ??= f.F()
  }

  get src () {
    return this.#src ??= ''
  }

  constructor () {
    echo.on('zoom:open', () => this.open())
  }

  @repaint
  close () {
    this.#opened = f.F()
    return this
  }

  @repaint
  open () {
    this.#opened = f.not(this.opened)
    return this
  }

  async change (snapshot) {
    this.#src = await snapshot
    return this
  }
}

export default Zoom
