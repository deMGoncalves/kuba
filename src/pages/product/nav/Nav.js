import { paint } from '@h'
import component from './component'

const oneOff = Symbol('oneOff')

@paint(component)
class Nav {
  get name () {
    return this[oneOff].product.name
  }

  get price () {
    return this[oneOff].product.price
  }

  constructor (product) {
    this[oneOff] = { product }
    return this
  }
}

export default Nav
