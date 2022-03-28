import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import effect from './effect'
import setData from './setData'
import template from './template'

@paint(template)
@effect
class Flex {
  #pristine
  #valor

  get descricao () {
    return 'Nível de flexibilidade do shape'
  }

  get nome () {
    return this.valor
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
    this.#valor = shape.flex?.valor
    setData(this)
    return this
  }
}

export default Flex
