import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import props from '@kuba/props'
import component from './component'
import resize from './resize'

@paint(component)
@props
@resize
class Header {
  #opened

  get opened () {
    return this.#opened ?? f.F()
  }

  @repaint
  close () {
    this.#opened = f.F()
    return this
  }

  @repaint
  open () {
    this.#opened = f.T()
    return this
  }
}

export default Header
