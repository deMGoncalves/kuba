import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Tail {
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
    return new Tail(data.tail)
  }
}

export default Tail
