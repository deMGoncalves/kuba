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

  constructor (descriptor) {
    this.#thumbnail = descriptor?.thumbnail
    this.#modelo = descriptor?.modelo
  }

  static create (descriptor) {
    return new Shape(descriptor)
  }

  static stub () {
    return new Shape()
  }
}

export default Shape
