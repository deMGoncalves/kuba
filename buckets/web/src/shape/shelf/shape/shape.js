import { paint } from '@kuba/h'
import Modelo from './modelo'
import Tamanho from './tamanho'
import component from './component'

@paint(component)
class Shape {
  #modelo
  #tamanho
  #thumbnail

  get modelo () {
    return this.#modelo
  }

  get tamanho () {
    return this.#tamanho
  }

  get thumbnail () {
    return this.#thumbnail ??= ''
  }

  constructor (modelo, tamanho, thumbnail) {
    this.#modelo = modelo
    this.#tamanho = tamanho
    this.#thumbnail = thumbnail
  }

  static create (data) {
    return new Shape(
      Modelo.create(data.modelo),
      Tamanho.create(data.tamanho),
      data.thumbnail
    )
  }

  static stub () {
    return new Shape(
      Modelo.stub(),
      Tamanho.stub(),
      ''
    )
  }
}

export default Shape
