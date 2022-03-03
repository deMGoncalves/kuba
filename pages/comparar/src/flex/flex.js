import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import component from './component'

@paint(component)
class Flex {
  get master () {
    return Shape.master?.flex?.valor
  }

  get slave () {
    return Shape.slave?.flex?.valor
  }
}

export default Flex
