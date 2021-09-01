import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import getData from './getData'

@paint(component)
@getData
class Navigaiton {
  #className
  #categories
  #title

  get className () {
    return this.#className
  }

  get categories () {
    return this.#categories ??= f.repeat({}, 8)
  }

  get title () {
    return this.#title ??= ''
  }

  constructor (props) {
    this.#className = props.className
  }

  @repaint
  change (descriptor) {
    this.#categories = descriptor.categories
    this.#title = descriptor.title
    return this
  }
}

export default Navigaiton
