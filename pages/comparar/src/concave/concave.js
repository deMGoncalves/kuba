import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import component from './component'

@paint(component)
class Concave {
  get master () {
    return Shape.master?.concave
  }

  get slave () {
    return Shape.slave?.concave
  }
}

export default Concave
