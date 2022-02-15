import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
import component from './component'

@paint(component)
class Simetrico {
  get master () {
    return Shape.master?.simetrico
      ? 'Sim'
      : '-'
  }

  get slave () {
    return Shape.slave?.simetrico
      ? 'Sim'
      : '-'
  }
}

export default Simetrico
