import { paint } from '@kuba/h'
import { urlFor } from '@kuba/router'
import component from './component'

@paint(component)
class Modelo {
  #marca
  #shape
  #valor

  get href () {
    return urlFor('shape', { marca: this.#marca, shape: this.#shape })
  }

  get valor () {
    return this.#valor ??= ''
  }

  constructor (marca, shape, valor) {
    this.#marca = marca
    this.#shape = shape
    this.#valor = valor
  }

  static create (shape) {
    return new Modelo(
      shape.marca?.slug,
      shape.slug,
      shape.modelo
    )
  }

  static stub () {
    return new Modelo()
  }
}

export default Modelo
