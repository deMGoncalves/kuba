import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Wheelbase {
  #valor
  get valor () {
    return this.#valor ??= ''
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create (valor) {
    return new Wheelbase(valor)
  }
}

export default Wheelbase
