import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Material {
  #valor

  get valor () {
    return this.#valor ??= f.repeat({}, 2)
  }

  @repaint
  changeValor (valor) {
    this.#valor = valor
  }
}

export default Material
