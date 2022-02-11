import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import effect from './effect'
import setData from './setData'

@paint(component)
@effect
class Concave {
  #pristine
  #valor

  get pristine () {
    return this.#pristine ??= f.T()
  }

  get valor () {
    return this.#valor ??= f.F()
  }

  @repaint
  [effect.onChange] (valor) {
    this.#pristine = f.F()
    this.#valor = valor
    setData(valor)
    return this
  }
}

export default Concave
