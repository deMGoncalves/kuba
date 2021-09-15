import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import props from '@kuba/props'
import component from './component'
import getData from './getData'

@paint(component)
@props
class Nav {
  #links

  get links () {
    return this.#links ??= f.repeat({}, 6)
  }

  @repaint
  change (descriptor) {
    this.#links = descriptor.nav
    return this
  }
  
  @didMount
  async mount () {
    this.change(await getData())
    return this
  }
}

export default Nav
