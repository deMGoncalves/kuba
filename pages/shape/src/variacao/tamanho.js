import { paint, repaint } from '@kuba/h'
import template from './template'
import effect from './effect'

@paint(template)
@effect
class Tamanho {
  #valor

  get descricao () {
    return 'Medida em polegadas do comprimento de desenvolvido do shape'
  }

  get nome () {
    return 'Tamanho'
  }

  get valor () {
    return this.#valor
      ? `${this.#valor}"`
      : ''
  }

  @repaint
  [effect.onChange] (shape) {
    this.#valor = shape.tamanho.valor
    return this
  }
}

export default Tamanho
