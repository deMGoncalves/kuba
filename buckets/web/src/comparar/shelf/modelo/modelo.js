import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Modelo {
  #valor

  get valor () {
    return this.#valor
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create (data) {
    return new Modelo(data.modelo)
  }
}

export default Modelo
