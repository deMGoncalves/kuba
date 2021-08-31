import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import props from '@kuba/props'
import hook from './hook'
import component from './component'
import getData from './getData'

@paint(component)
@props
class Shelf {
  #products

  get products () {
    return this.#products ??= f.repeat({}, 12)
  }

  @repaint
  change (descriptor) {
    this.#products = descriptor.products
    return this
  }

  @didMount
  mount () {
    getData(this)
    return this
  }

  @hook
  refine () {
    getData(this)
    return this
  }
}

export default Shelf
