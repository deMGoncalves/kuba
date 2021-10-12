import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Product {
  #name
  #thumbnails

  get thumbnails () {
    return this.#thumbnails ??= []
  }

  get name () {
    return this.#name ??= ''
  }

  constructor (descriptor) {
    this.#name = descriptor.name
    this.#thumbnails = descriptor.thumbnails
  }

  static create (descriptor) {
    return new Product(descriptor)
  }
}

export default Product
