import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import getData from './getData'

@paint(component)
@getData
class Nav {
  #className
  #links

  get className () {
    return this.#className
  }

  get links () {
    return this.#links ??= f.repeat({}, 6)
  }

  constructor (props) {
    this.#className = props.className
  }

  @repaint
  change (descriptor) {
    this.#links = descriptor.nav
    return this
  }
}

export default Nav
