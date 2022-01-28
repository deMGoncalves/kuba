import { paint } from '@kuba/h'
import Compare from '@kuba/compare'
import component from './component'

@paint(component)
class Descricao {
  #index
  #valor

  get valor () {
    return this.#valor ??= Compare.shelf[this.#index].descricao
  }

  constructor (props) {
    this.#index = props.master ? 0 : 1
  }
}

export default Descricao
