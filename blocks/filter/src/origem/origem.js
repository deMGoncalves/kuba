import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Origem {
  #len
  #opened

  get len () {
    return this.#len ??= 0
  }

  get opened () {
    return this.#opened ??= f.F()
  }

  @repaint
  close () {
    this.#opened = f.F()
    return this
  }

  @repaint
  open () {
    this.#opened = f.T()
    return this
  }

  @repaint
  [effect.onChange] (len) {
    this.#len = len
    return this
  }
}

export default Origem
