import { paint } from '@h'
import component from './component'

const oneOff = Symbol('oneOff')

@paint(component)
class Promo {
  get text () {
    return this[oneOff].product.promo
  }

  constructor (product) {
    this[oneOff] = { product }
    return this
  }
}

export default Promo
