import { paint } from '@kuba/h'
import component from './component'
import converter from '../converter'
@paint(component)
class Lixa {
  #valor
  get valor () {
    return this.#valor ??= ''
  }

  constructor (valor) {
    this.#valor = converter(valor)
  }

  static create (valor) {
    return new Lixa(valor)
  }
}

export default Lixa
