import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import getData from './getData'

@paint(component)
@getData
class Nav {
  #className
  #darlings
  #nav
  #slot

  get className () {
    return this.#className
  }

  get darlings () {
    return this.#darlings ??= f.repeat({}, 3)
  }

  get nav () {
    return this.#nav ??= f.repeat({}, 6)
  }

  get slot () {
    return this.#slot
  }

  constructor (props) {
    this.#className = props.className
    this.#slot = props.slot
  }

  @repaint
  change (descriptor) {
    this.#darlings = descriptor.darlings
    this.#nav = descriptor.nav
    return this
  }
}

export default Nav
