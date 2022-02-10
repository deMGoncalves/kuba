import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'

@paint(component)
class Tamanho {
  #valor
  #wheelbase

  get valor () {
    return `${this.#valor}"`
  }

  get wheelbase () {
    return this.#wheelbase
      ? f.add(this.#wheelbase, this[f.dunder.medida](this.#wheelbase))
      : ''
  }

  constructor (valor, wheelbase) {
    this.#valor = valor
    this.#wheelbase = wheelbase
  }

  [f.dunder.medida] (value) {
    return f.test(/N\/D/, value)
      ? ''
      : '"'
  }

  static create (shape) {
    return new Tamanho(
      shape.tamanho?.valor,
      shape.wheelbase?.valor
    )
  }
}

export default Tamanho
