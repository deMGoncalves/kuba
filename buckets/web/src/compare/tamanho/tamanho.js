import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
import component from './component'

@paint(component)
class Tamanho {
  get master () {
    return `${Shape.master?.tamanho?.valor}"`
  }

  get slave () {
    return `${Shape.slave?.tamanho?.valor}"`
  }
}

export default Tamanho
