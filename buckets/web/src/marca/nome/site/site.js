import { paint, repaint } from '@kuba/h'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Site {
  #valor

  get valor () {
    return this.#valor
  }

  @repaint
  changeValor (valor) {
    this.#valor = valor
    return this
  }
}

export default Site
