import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Shape {
  #modelo

  get modelo () {
    return this.#modelo ??= ''
  }

  constructor (modelo) {
    this.#modelo = modelo
  }

  static create (data) {
    return new Shape(data.modelo)
  }

  static stub () {
    return new Shape()
  }
}

export default Shape
