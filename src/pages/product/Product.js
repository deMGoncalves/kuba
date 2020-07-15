import { paint } from '@h'
import component, { nav, promo } from './component'
import markut from '@markup'
import Nav from './nav'
import Promo from './promo'

const oneOff = Symbol('oneOff')

@paint(component)
@markut
class Product {
  get description () {
    return this[oneOff].description
  }

  get height () {
    return this[oneOff].height
  }

  get image () {
    return this[oneOff].image
  }

  get name () {
    return this[oneOff].name
  }

  get promo () {
    return this[oneOff].promo
  }

  get title () {
    return `Comprar ${this.name} - Zeen (BR)`
  }

  constructor (attr) {
    this[oneOff] = attr
    this[nav] = new Nav(this)
    this[promo] = new Promo(this)
    return this
  }
}

export default Product
