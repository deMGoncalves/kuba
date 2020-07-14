import { paint } from '@h'
import component from './component'
import markut from '@markup'

const oneOff = Symbol('oneOff')

@paint(component)
@markut
class Product {
  get description () {
    return 'Compre o iPhone XR em seis lindas cores, com Face ID avançado, chip A12 Bionic e tela Liquid Retina. Compre agora com frete grátis.'
  }

  get image () {
    return this[oneOff].image
  }

  get title () {
    return `Comprar ${this[oneOff].name} - Zeen (BR)`
  }

  constructor (attr) {
    this[oneOff] = attr
    return this
  }
}

export default Product
