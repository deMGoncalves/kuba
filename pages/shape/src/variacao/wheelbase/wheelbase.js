import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import component from '@kuba/shape/src/variacao/template'
import effect from './effect'

@paint(component)
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
  [effect.onChange] (valor) {
    this.#valor = valor
    return this
  }
}

export default Wheelbase
