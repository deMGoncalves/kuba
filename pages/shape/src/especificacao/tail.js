import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import effect from './effect'
import setData from './setData'
import template from './template'

@paint(template)
@effect
class Tail {
  #pristine
  #valor

  get descricao () {
    return 'Parte traseira inclinada do shape'
  }

  get nome () {
    return 'Tail'
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
    this.#valor = shape.tail
    setData(this)
    return this
  }
}

export default Tail
