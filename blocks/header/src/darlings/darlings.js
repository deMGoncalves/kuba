import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import getData from './getData'

@paint(component)
class Darlings {
  #className
  #links

  get className () {
    return this.#className
  }

  get links () {
    return this.#links ??= f.repeat({}, 3)
  }

  constructor (props) {
    this.#className = props.className
  }

  @repaint
  change (descriptor) {
    this.#links = descriptor.darlings
    return this
  }

  @didMount
  async mount () {
    this.change(await getData())
    return this
  }
}

export default Darlings
