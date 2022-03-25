import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import effect from './effect'
import moeda from './moeda'
import setData from './setData'

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
  [effect.onChange] (valor, origem, site) {
    this.#empty = f.isFalsy(valor)
    this.#valor = moeda(origem)?.format(valor)
    setData(valor, origem, site)
    return this
  }
}

export default Preco
