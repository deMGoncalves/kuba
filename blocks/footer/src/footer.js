import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Footer {
  #className
  #slot

  get className () {
    return this.#className
  }

  get slot () {
    return this.#slot
  }

  constructor (props) {
    this.#className = props.className
    this.#slot = props.slot
  }
}

export default Footer
