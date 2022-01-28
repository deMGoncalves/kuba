import { paint } from '@kuba/h'
import Compare from '@kuba/compare'
import component from './component'

@paint(component)
class Thumbnail {
  #alt
  #index
  #src

  get alt () {
    return this.#alt ??= Compare.shelf[this.#index].modelo
  }

  get src () {
    return this.#src ??= Compare.shelf[this.#index].thumbnail
  }

  constructor (props) {
    this.#index = props.master ? 0 : 1
  }
}

export default Thumbnail
