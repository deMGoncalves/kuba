import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
import component from './component'

@paint(component)
class Tail {
  get master () {
    return Shape.master?.tail
      ? 'Sim'
      : 'Não'
  }

  get slave () {
    return Shape.slave?.tail
      ? 'Sim'
      : 'Não'
  }
}

export default Tail
