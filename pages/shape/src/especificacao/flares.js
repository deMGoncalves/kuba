import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import effect from './effect'
import setData from './setData'
import template from './template'

@paint(template)
@effect
class Flares {
  #pristine
  #valor

  get descricao () {
    return 'Onda no shape acima da roda para evitar que encostem'
  }

  get nome () {
    return 'Wheel Flares'
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
    this.#valor = shape.wheel_flares
    setData(this)
    return this
  }
}

export default Flares
