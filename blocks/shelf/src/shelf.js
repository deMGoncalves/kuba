import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import echo from '@kuba/echo'
import hook from '@kuba/hook'
import globalProps from '@kuba/globalprops'
import component from './component'
import getData from './getData'

@paint(component)
@globalProps
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

  @hook(echo.on('filter:change'))
  refinin () {
    getData(this)
    return this
  }
}

export default Shelf
