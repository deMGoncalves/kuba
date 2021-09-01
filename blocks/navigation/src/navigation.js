import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import props from '@kuba/props'
import component from './component'
import getData from './getData'

@paint(component)
@getData
@props
class Navigaiton {
  #categories
  #title

  get categories () {
    return this.#categories ??= f.repeat({}, 8)
  }

  get title () {
    return this.#title ??= ''
  }

  @repaint
  change (descriptor) {
    this.#categories = descriptor.categories
    this.#title = descriptor.title
    return this
  }
}

export default Navigaiton
