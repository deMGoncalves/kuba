import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Laminas {
  #valor

  get valor () {
    return this.#valor
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create () {
    return new Laminas(global.laminas)
  }
}

export default Laminas
