import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Concave {
  #valor

  get valor () {
    return this.#valor ??= ''
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create (valor) {
    return new Concave(valor)
  }
}

export default Concave
