import { paint, didMount } from '@kuba/h'
import echo from '@kuba/echo'
import hook from '@kuba/hook'
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

  @didMount
  mount () {
    return this
  }

  @hook(echo.on('filter:change'))
  refinin (_descriptor) {
    return this
  }
}

export default Shelf
