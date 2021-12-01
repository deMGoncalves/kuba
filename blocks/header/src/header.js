import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import props from '@kuba/props'
import component from './component'

@paint(component)
@props
class Header {
  #opened

  get opened () {
    return this.#opened ?? f.F()
  }

  @repaint
  toggle () {
    this.#opened = f.not(this.opened)
    return this
  }
}

export default Header
