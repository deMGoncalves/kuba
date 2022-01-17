import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Lixa {
  #valor

  get valor () {
    return this.#valor
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create (data) {
    return new Lixa(data.lixa)
  }
}

export default Lixa
