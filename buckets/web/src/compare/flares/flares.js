import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
import component from './component'

@paint(component)
class Flares {
  get master () {
    return Shape.master?.wheel_flares
      ? 'Sim'
      : '-'
  }

  get slave () {
    return Shape.slave?.wheel_flares
      ? 'Sim'
      : '-'
  }
}

export default Flares
