import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Concave {
  #valor

  get valor () {
    return this.#valor
      ? 'Sim'
      : 'Não'
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create (data) {
    return new Concave(data.concave)
  }
}

export default Concave
