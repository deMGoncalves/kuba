import { paint, repaint } from '@kuba/h'
import component from './component'
import effect, { onChange } from './effect'
import * as mapper from './mapper'

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
  [onChange] (valor) {
    this.#valor = valor
    return this
  }
}

export default Origem
