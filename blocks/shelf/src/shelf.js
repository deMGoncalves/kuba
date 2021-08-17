import { paint } from '@kuba/h'
import component from './component'
import schema from './schema'

@paint(component)
class Shelf {
  #className
  #services
  #slot

  get className () {
    return this.#className
  }

  get services () {
    return this.#services ??= schema.services
  }

  get slot () {
    return this.#slot
  }

  constructor (props) {
    this.#className = props.className
    this.#slot = props.slot
  }
}

export default Shelf
