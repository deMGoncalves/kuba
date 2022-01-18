import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Wheelbase {
  #valor

  get valor () {
    return this.#valor
      ? `${this.#valor}"`
      : '-'
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create (data) {
    return new Wheelbase(data.wheelbase?.valor)
  }
}

export default Wheelbase
