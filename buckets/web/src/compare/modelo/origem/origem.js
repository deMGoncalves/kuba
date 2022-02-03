import { paint } from '@kuba/h'
import { Shape } from '@kuba/web/src/compare'
import component from './component'
import * as mapper from './mapper'

@paint(component)
class Origem {
  #position
  #valor

  get url () {
    return mapper[this.valor]
  }

  get valor () {
    return this.#valor ??= Shape[this.#position]?.marca?.origem?.valor
  }

  constructor (props) {
    this.#position = props.master ? 'master' : 'slave'
  }
}

export default Origem
