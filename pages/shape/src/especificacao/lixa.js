import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import effect from './effect'
import setData from './setData'
import template from './template'

@paint(template)
@effect
class Lixa {
  #pristine
  #valor

  get descricao () {
    return this.valor
  }

  get nome () {
    return 'Lixa'
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
    this.#valor = shape.lixa
    setData(this)
    return this
  }
}

export default Lixa
