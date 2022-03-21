import * as mapper from './mapper'
import { paint, repaint } from '@kuba/h'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Origem {
  #valor

  get url () {
    return mapper[this.valor]
  }

  get valor () {
    return this.#valor
  }

  @repaint
  [effect.onChange] (valor) {
    this.#valor = valor
    return this
  }
}

export default Origem
