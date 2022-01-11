import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Tail {
  #valor

  get valor () {
    return this.#valor
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create () {
    return new Tail(global.tail)
  }
}

export default Tail
