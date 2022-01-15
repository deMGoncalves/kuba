import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Tamanho {
  #valor
  get valor () {
    return this.#valor ??= ''
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create (valor) {
    return new Tamanho(valor)
  }
}

export default Tamanho
