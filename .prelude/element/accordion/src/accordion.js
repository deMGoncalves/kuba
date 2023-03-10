import { paint, repaint } from '@kuba/h'
import component from './component'

@paint(component)
class Accordion {
  #opened

  get opened () {
    return (this.#opened ??= false)
  }

  @repaint
  toggle () {
    this.#opened = !this.opened
    return this
  }
}

export default Accordion
