import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import effect from './effect'
import real from './real'

@paint(component)
@effect
class Preco {
  #empty
  #valor

  get empty () {
    return this.#empty ??= f.F()
  }

  get valor () {
    return this.#valor ??= ''
  }

  @repaint
  [effect.onChange] (valor) {
    this.#empty = f.isFalsy(valor)
    this.#valor = real.format(valor)
    return this
  }
}

export default Preco
