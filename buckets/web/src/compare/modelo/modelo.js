import { paint } from '@kuba/h'
import Compare from '@kuba/compare'
import props from '@kuba/props'
import component from './component'

@paint(component)
@props
class Modelo {
  #index
  #valor

  get valor () {
    return this.#valor ??= Compare.shelf[this.#index].modelo
  }

  constructor (props) {
    this.#index = props.master ? 0 : 1
  }
}

export default Modelo
