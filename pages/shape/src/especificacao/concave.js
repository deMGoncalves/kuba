import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import effect from './effect'
import setData from './setData'
import template from './template'

@paint(template)
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
    return this.#valor ??= ''
  }

  @repaint
  [effect.onChange] (shape) {
    this.#pristine = f.F()
    this.#valor = shape.concave
    setData(this)
    return this
  }
}

export default Concave
