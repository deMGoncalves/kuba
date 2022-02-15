import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
import component from './component'

@paint(component)
class Tail {
  get master () {
    return Shape.master?.tail
  }

  get slave () {
    return Shape.slave?.tail
  }
}

export default Tail
