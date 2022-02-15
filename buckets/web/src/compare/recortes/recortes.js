import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
import component from './component'

@paint(component)
class Recortes {
  get master () {
    return Shape.master?.cut_outs
  }

  get slave () {
    return Shape.slave?.cut_outs
  }
}

export default Recortes
