import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Modelo {
  #valor

  get valor () {
    return this.#valor ??= ''
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create (valor) {
    return new Modelo(valor)
  }

  static stub () {
    return new Modelo()
  }
}

export default Modelo
