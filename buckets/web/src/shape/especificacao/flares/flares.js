import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Flares {
  #pristine
  #valor

  get pristine () {
    return this.#pristine ??= f.T()
  }

  get valor () {
    return this.#valor
  }

  @repaint
  [effect.onChange] (valor) {
    this.#pristine = f.F()
    this.#valor = valor
    return this
  }
}

export default Flares
