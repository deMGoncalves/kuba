import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import effect from './effect'
import template from './template'

@paint(template)
@effect
class Wheelbase {
  #valor

  get descricao () {
    return 'Menor distância entre os trucks do shape'
  }

  get nome () {
    return 'Wheelbase'
  }

  get valor () {
    return this.#valor
      ? f.add(this.#valor, this[f.dunder.medida])
      : ''
  }

  get [f.dunder.medida] () {
    return f.test(/N\/D/, this.#valor)
      ? ''
      : '"'
  }

  @repaint
  [effect.onChange] (shape) {
    this.#valor = shape.wheelbase?.valor
    return this
  }
}

export default Wheelbase
