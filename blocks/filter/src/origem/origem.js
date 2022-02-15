import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'

@paint(component)
class Origem {
  #opened

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
}

export default Origem
