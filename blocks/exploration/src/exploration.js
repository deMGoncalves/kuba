import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import getData from './getData'

@paint(component)
@getData
class Exploration {
  #className
  #departaments
  #title

  get className () {
    return this.#className
  }

  get departaments () {
    return this.#departaments ??= f.repeat({}, 4)
  }

  get title () {
    return this.#title ??= ''
  }

  @repaint
  change (descriptor) {
    this.#departaments = descriptor.departaments
    this.#title = descriptor.title
    return this
  }
}

export default Exploration
