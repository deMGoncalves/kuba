import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import props from '@kuba/props'
import component from './component'

@paint(component)
@props
class Accordion {
  #opened

  get opened () {
    return this.#opened ??= f.F()
  }

  @repaint
  toggle () {
    this.#opened = f.not(this.opened)
    return this
  }

  static is (props) {
    return f.has('group', props)
  }
}

export default Accordion
