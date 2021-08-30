import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import echo from '@kuba/echo'
import hook from '@kuba/hook'
import component from './component'
import getData from './getData'

@paint(component)
class Shelf {
  #className
  #products
  #slot

  get className () {
    return this.#className
  }

  get products () {
    return this.#products ??= f.repeat({}, 12)
  }

  get slot () {
    return this.#slot
  }

  constructor (props) {
    this.#className = props.className
    this.#slot = props.slot
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

  @hook(echo.on('filter:change'))
  refinin () {
    getData(this)
    return this
  }
}

export default Shelf
