import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import props from '@kuba/props'
import component from './component'
import toggle from './toggle'

@paint(component)
@props
@toggle
class Accordion {
  #id
  #opened

  get id () {
    return this.#id ??= f.guid()
  }

  get opened () {
    return this.#opened ??= f.F()
  }

  @repaint
  close () {
    this.#opened = f.F()
    return this
  }

  @repaint
  @toggle.open
  toggle () {
    this.#opened = f.not(this.opened)
    return this
  }

  static is (props) {
    return f.has('group', props)
  }
}

export default Accordion
