import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Lixa {
  #valor

  get valor () {
    return this.#valor ? 'Sim' : 'Nao'
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create () {
    return new Lixa(global.lixa)
  }
}

export default Lixa
