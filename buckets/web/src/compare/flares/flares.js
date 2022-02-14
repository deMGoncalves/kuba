import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
import component from './component'

@paint(component)
class Falres {
  get master () {
    return Shape.master?.wheel_flares
      ? 'Sim'
      : 'Não'
  }

  get slave () {
    return Shape.slave?.wheel_flares
      ? 'Sim'
      : 'Não'
  }
}

export default Falres
