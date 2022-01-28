import { paint } from '@kuba/h'
import Compare from '@kuba/compare'
import component from './component'
import * as mapper from './mapper'

@paint(component)
class Origem {
  #index
  #valor

  get url () {
    return mapper[this.valor]
  }

  get valor () {
    return this.#valor ??= Compare.shelf[this.#index].marca.origem.valor
  }

  constructor (props) {
    this.#index = props.master ? 0 : 1
  }
}

export default Origem
