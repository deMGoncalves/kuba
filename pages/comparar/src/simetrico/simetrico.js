import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import component from './component'

@paint(component)
class Simetrico {
  get master () {
    return Shape.master?.simetrico
  }

  get slave () {
    return Shape.slave?.simetrico
  }
}

export default Simetrico
