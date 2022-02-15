import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
import component from './component'

@paint(component)
class Flex {
  get master () {
    return Shape.master?.flex?.valor ?? '-'
  }

  get slave () {
    return Shape.slave?.flex?.valor ?? '-'
  }
}

export default Flex
