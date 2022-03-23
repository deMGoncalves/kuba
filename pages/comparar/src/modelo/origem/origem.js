import * as mapper from './mapper'
import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import component from './component'

@paint(component)
class Origem {
  #position
  #valor

  get position () {
    return this.#position
  }

  get url () {
    return mapper[this.valor]
  }

  get valor () {
    return this.#valor ??= Shape[this.position]?.marca?.origem?.valor
  }

  constructor (props) {
    this.#position = props.slave ? 'slave' : 'master'
  }
}

export default Origem
