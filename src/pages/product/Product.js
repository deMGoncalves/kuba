import { paint } from '@h'
import component, { nav, promo } from './component'
import markut from '@markup'
import Nav from './nav'
import Promo from './promo'

const oneOff = Symbol('oneOff')

@paint(component)
@markut
class Product {
  get brand () {
    return this[oneOff].brand
  }

  get description () {
    return this[oneOff].description
  }

  get depth () {
    return this[oneOff].depth
  }

  get height () {
    return this[oneOff].height
  }

  get image () {
    return this[oneOff].image
  }

  get id () {
    return this[oneOff].id
  }

  get name () {
    return this[oneOff].name
  }

  get promo () {
    return this[oneOff].promo
  }

  get specification () {
    return [...this[oneOff].especification]
  }

  get variation () {
    return [...this[oneOff].skus]
  }

  get title () {
    return `Comprar ${this.name} - Zeen (BR)`
  }

  get weight () {
    return this[oneOff].weight
  }

  get width () {
    return this[oneOff].width
  }

  constructor (attr) {
    this[oneOff] = attr
    this[nav] = new Nav(this)
    this[promo] = new Promo(this)
    return this
  }
}

export default Product
