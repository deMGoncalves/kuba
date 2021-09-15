import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import * as settings from '@kuba/settings'
import component from './component'

@paint(component)
class Product {
  #id
  #idDefaultImage
  #name

  get image () {
    return f.and(this.#id, this.#idDefaultImage)
      ? `${settings.api.url}/images/products/${this.#id}/${this.#idDefaultImage}`
      : ''
  }

  get name () {
    return this.#name ??= ''
  }

  constructor (descriptor) {
    this.#id = descriptor.id
    this.#idDefaultImage = descriptor.id_default_image
    this.#name = descriptor.name
  }

  static create (descriptor) {
    return new Product(descriptor)
  }
}

export default Product
