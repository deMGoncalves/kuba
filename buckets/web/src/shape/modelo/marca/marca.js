import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Marca {
  #pro
  #valor

  get pro () {
    return this.#pro ??= f.F()
  }

  get valor () {
    return this.#valor
  }

  @repaint
  [effect.onChange] (valor, pro) {
    this.#pro = pro
    this.#valor = valor
    return this
  }
}

export default Marca
