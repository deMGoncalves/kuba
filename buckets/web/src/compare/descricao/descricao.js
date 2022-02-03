import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
import component from './component'

@paint(component)
class Descricao {
  get master () {
    return Shape.master?.descricao
  }

  get slave () {
    return Shape.slave?.descricao
  }
}

export default Descricao
