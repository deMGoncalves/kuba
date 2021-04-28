import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'

@paint(component)
class Nav {
  #opened
  #slot

  get opened () {
    return this.#opened ??= f.F()
  }

  get slot () {
    return this.#slot
  }

  constructor (props) {
    this.#slot = props.slot
  }

  @repaint
  toggle () {
    this.#opened = f.not(this.#opened)
    return this
  }
}

export default Nav
