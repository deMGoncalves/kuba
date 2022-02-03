import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
import component from './component'

@paint(component)
class Wheelbase {
  get master () {
    return `${Shape.master?.wheelbase?.valor}"`
  }

  get slave () {
    return `${Shape.slave?.wheelbase?.valor}"`
  }
}

export default Wheelbase
