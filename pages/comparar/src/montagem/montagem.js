import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import component from './component'

@paint(component)
class Montagem {
  get master () {
    return Shape.master?.montagem?.valor
  }

  get slave () {
    return Shape.slave?.montagem?.valor
  }
}

export default Montagem
