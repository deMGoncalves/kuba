import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
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
  [effect.onChange] (valor) {
    this.#valor = valor
  }
}

export default Material
