import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import effect from './effect'
import setData from './setData'
import template from './template'

@paint(template)
@effect
class Simetrico {
  #pristine
  #valor

  get descricao () {
    return 'Shape simétrico é mesmo em ambas as extremidades'
  }

  get nome () {
    return 'Simétrico'
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
    this.#valor = shape.simetrico
    setData(this)
    return this
  }
}

export default Simetrico
