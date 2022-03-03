import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
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
