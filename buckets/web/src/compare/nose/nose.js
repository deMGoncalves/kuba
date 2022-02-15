import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
import component from './component'

@paint(component)
class Nose {
  get master () {
    return Shape.master?.nose
  }

  get slave () {
    return Shape.slave?.nose
  }
}

export default Nose
