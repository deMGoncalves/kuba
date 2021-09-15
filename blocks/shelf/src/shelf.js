import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import props from '@kuba/props'
import hook from './hook'
import component from './component'
import getData from './getData'
import Product from './product'

@paint(component)
@props
class Shelf {
  #products
  #title

  get products () {
    return this.#products ??= f.map(f.repeat({}, 12), Product.create)
  }

  get title () {
    return this.#title ??= ''
  }

  constructor (props) {
    this.#title = props.title
  }

  @repaint
  change (response) {
    this.#products = f.map(response.products, Product.create)
    return this
  }

  @didMount
  async mount () {
    this.change(await getData(this))
    return this
  }

  @hook
  async refine () {
    this.change(await getData(this))
    return this
  }
}

export default Shelf
