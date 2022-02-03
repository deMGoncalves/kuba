import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
import component from './component'

@paint(component)
class Modelo {
  get master () {
    return Shape.master?.modelo
  }

  get slave () {
    return Shape.slave?.modelo
  }
}

export default Modelo
