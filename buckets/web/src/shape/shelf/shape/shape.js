import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Shape {
  #modelo

  get modelo () {
    return this.#modelo ??= ''
  }

  static stub () {
    return new Shape()
  }
}

export default Shape
