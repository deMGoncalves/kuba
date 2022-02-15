import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
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
