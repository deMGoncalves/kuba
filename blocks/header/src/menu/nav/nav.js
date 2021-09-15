import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import props from '@kuba/props'
import component from './component'
import getData from './getData'

@paint(component)
@props
class Nav {
  #darlings
  #nav

  get darlings () {
    return this.#darlings ??= f.repeat({}, 3)
  }

  get nav () {
    return this.#nav ??= f.repeat({}, 6)
  }

  @repaint
  change (descriptor) {
    this.#darlings = descriptor.darlings
    this.#nav = descriptor.nav
    return this
  }

  @didMount
  async mount () {
    this.change(await getData())
    return this
  }
}

export default Nav
