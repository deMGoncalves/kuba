import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Wheelbase {
  #valor

  get valor () {
    return `${this.#valor}"`
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create () {
    return new Wheelbase(global.wheelbase.valor)
  }
}

export default Wheelbase
