import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import effect from './effect'
import moeda from './moeda'

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
  [effect.onChange] (valor, origem) {
    valor && (
      this.#empty = f.isFalsy(valor),
      this.#valor = moeda(origem)?.format(valor)
    )
    return this
  }
}

export default Preco
