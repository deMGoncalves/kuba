import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Tamanho {
  #valor
  #wheelbase

  get valor () {
    return this.#valor
      ? `${this.#valor}"`
      : undefined
  }

  get wheelbase () {
    return this.#wheelbase
      ? `${this.#wheelbase}"`
      : undefined
  }

  constructor (valor, wheelbase) {
    this.#valor = valor
    this.#wheelbase = wheelbase
  }

  static create (data) {
    return new Tamanho(
      data.tamanho.valor,
      data.wheelbase.valor
    )
  }

  static stub () {
    return new Tamanho()
  }
}

export default Tamanho
