import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Shape {
  #modelo
  #tamanho

  get modelo () {
    return this.#modelo ??= ''
  }

  get tamanho () {
    return this.#tamanho ??= ''
  }

  constructor (modelo, tamanho) {
    this.#modelo = modelo
    this.#tamanho = tamanho
  }

  static create (data) {
    return new Shape(
      data.modelo,
      data.tamanho.valor
    )
  }

  static stub () {
    return new Shape()
  }
}

export default Shape
