import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Shape {
  get name () {
    return 'shape'
  }

  static stub () {
    return new Shape()
  }
}

export default Shape
