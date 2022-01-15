import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Origem {
  #valor
  get valor () {
    return this.#valor ??= ''
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create (valor) {
    return new Origem(valor)
  }
}

export default Origem
