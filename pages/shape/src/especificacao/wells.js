import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import effect from './effect'
import setData from './setData'
import template from './template'

@paint(template)
@effect
class Wells {
  #pristine
  #valor

  get descricao () {
    return 'Poço para as rodas não encostar no shape'
  }

  get nome () {
    return 'Wheel Wells'
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
    this.#valor = shape.wheel_wells
    setData(this)
    return this
  }
}

export default Wells
