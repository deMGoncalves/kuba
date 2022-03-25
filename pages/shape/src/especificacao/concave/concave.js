import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import component from '@kuba/shape/src/especificacao/template'
import effect from './effect'
import setData from './setData'

@paint(component)
@effect
class Concave {
  #pristine
  #valor

  get descricao () {
    return 'Inclinação simétrica das laterais do shape'
  }

  get nome () {
    return 'Concave'
  }

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
