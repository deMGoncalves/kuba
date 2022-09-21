import { paint } from '@kuba/h'
import component from './component'
import medida from './medida'

@paint(component)
class Tamanho {
  #valor
  #wheelbase

  get valor () {
    return medida(this.#valor)
  }

  get wheelbase () {
    return medida(this.#wheelbase)
  }

  constructor (valor, wheelbase) {
    this.#valor = valor
    this.#wheelbase = wheelbase
  }

  static create (shape) {
    return new Tamanho(
      shape.tamanho?.valor,
      shape.wheelbase?.valor
    )
  }
}

export default Tamanho
