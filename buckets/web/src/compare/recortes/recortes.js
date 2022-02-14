import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
import component from './component'

@paint(component)
class Recortes {
  get master () {
    return Shape.master?.cut_outs
      ? 'Sim'
      : '-'
  }

  get slave () {
    return Shape.slave?.cut_outs
      ? 'Sim'
      : '-'
  }
}

export default Recortes
