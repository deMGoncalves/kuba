import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Wheelbase {
  #valor

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
  [effect.onChange] (valor) {
    this.#valor = valor
    return this
  }
}

export default Wheelbase
