import { paint } from '@h'
import component from './component'
import markut from '@markup'
import Nav from './nav'

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
    this[oneOff].nav = new Nav(this)
    return this
  }
}

export default Product
