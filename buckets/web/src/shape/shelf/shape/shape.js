import { paint } from '@kuba/h'
import Tamanho from './tamanho'
import component from './component'

@paint(component)
class Shape {
  #logo
  #modelo
  #tamanho

  get logo () {
    return this.#logo
  }

  get modelo () {
    return this.#modelo ??= ''
  }

  get tamanho () {
    return this.#tamanho
  }

  constructor (modelo, tamanho, logo) {
    this.#logo = logo
    this.#modelo = modelo
    this.#tamanho = tamanho
  }

  static create (data) {
    return new Shape(
      data.modelo,
      Tamanho.create(data.tamanho),
      data.logo
    )
  }

  static stub () {
    return new Shape(
      '',
      Tamanho.stub()
    )
  }
}

export default Shape
