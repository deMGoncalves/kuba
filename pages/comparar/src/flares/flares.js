import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import component from './component'

@paint(component)
class Flares {
  get master () {
    return Shape.master?.wheel_flares
  }

  get slave () {
    return Shape.slave?.wheel_flares
  }
}

export default Flares
