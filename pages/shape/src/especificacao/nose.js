import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import effect from './effect'
import setData from './setData'
import template from './template'

@paint(template)
@effect
class Nose {
  #pristine
  #valor

  get descricao () {
    return 'Parte frontal inclinada do shape'
  }

  get nome () {
    return 'Nose'
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
    this.#valor = shape.nose
    setData(this)
    return this
  }
}

export default Nose
