import { paint } from '@kuba/h'
import component from './component'
import converter from '../converter'

@paint(component)
class Nose {
  #valor
  get valor () {
    return this.#valor ??= ''
  }

  constructor (valor) {
    this.#valor = converter(valor)
  }

  static create (valor) {
    return new Nose(valor)
  }
}

export default Nose
