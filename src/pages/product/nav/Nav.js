import { paint } from '@h'
import component from './component'

const oneOff = Symbol('oneOff')

@paint(component)
class Nav {
  get name () {
    return this[oneOff].prodoct.name
  }

  constructor (product) {
    this[oneOff].product = product
    return this
  }
}

export default Nav
