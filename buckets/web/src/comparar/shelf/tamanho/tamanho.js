import { paint } from '@kuba/h'
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

  static create (data) {
    return new Tamanho(data.tamanho?.valor)
  }
}

export default Tamanho
