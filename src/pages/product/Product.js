import { paint } from '@h'
import component from './component'
import markut from '@markup'

const oneOff = Symbol('oneOff')

@paint(component)
@markut
class Product {
  get description () {
    return this[oneOff].description
  }

  get image () {
    return this[oneOff].image
  }

  get name () {
    return this[oneOff].name
  }

  get title () {
    return `Comprar ${this.name} - Zeen (BR)`
  }

  constructor (attr) {
    this[oneOff] = attr
    return this
  }
}

export default Product
