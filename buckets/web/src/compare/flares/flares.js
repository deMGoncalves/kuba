import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
import component from './component'

@paint(component)
class Falres {
  get master () {
    return Shape.master?.flares
      ? 'Sim'
      : 'Não'
  }

  get slave () {
    return Shape.slave?.flares
      ? 'Sim'
      : 'Não'
  }
}

export default Falres
