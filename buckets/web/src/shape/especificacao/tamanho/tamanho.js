import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Tamanho {
  #valor

  get valor () {
    return this.#valor
      ? `${this.#valor}"`
      : '-'
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create () {
    return new Tamanho(global.tamanho?.valor)
  }
}

export default Tamanho
