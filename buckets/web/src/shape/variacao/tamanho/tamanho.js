import { paint, repaint } from '@kuba/h'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Tamanho {
  #valor

  get valor () {
    return this.#valor
      ? `${this.#valor}"`
      : ''
  }

  @repaint
  [effect.onChange] (valor) {
    this.#valor = valor
    return this
  }
}

export default Tamanho
