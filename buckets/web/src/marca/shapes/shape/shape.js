import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Shape {
  #thumbnail
  #modelo

  get modelo () {
    return this.#modelo ??= ''
  }

  get thumbnail () {
    return this.#thumbnail ??= ''
  }

  constructor (modelo, thumbnail) {
    this.#modelo = modelo
    this.#thumbnail = thumbnail
  }

  static create (descriptor) {
    return new Shape(
      descriptor?.modelo,
      descriptor?.thumbnail
    )
  }

  static stub () {
    return new Shape()
  }
}

export default Shape
