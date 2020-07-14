import { paint } from '@h'
import component from './component'

const oneOff = Symbol('oneOff')

@paint(component)
class Nav {
  constructor (product) {
    this[oneOff].product = product
    return this
  }
}

export default Nav
