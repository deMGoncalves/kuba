import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Tipo {
  #valor
  get valor () {
    return this.#valor ??= ''
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create (valor) {
    return new Tipo(valor)
  }
}

export default Tipo
