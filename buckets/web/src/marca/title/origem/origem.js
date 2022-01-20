import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'
import * as mapper from './mapper'

@paint(component)
class Origem {
  get url () {
    return mapper[this.valor]
  }

  get valor () {
    return global.origem?.valor
  }
}

export default Origem
