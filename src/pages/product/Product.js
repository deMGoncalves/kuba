import { paint } from '@h'
import component from './component'
import markut from '@markup'

import iPhoneXRSelect2019Family from './iphone-xr-select-2019-family.jpeg'

@paint(component)
@markut
class Product {
  get description () {
    return 'Compre o iPhone XR em seis lindas cores, com Face ID avançado, chip A12 Bionic e tela Liquid Retina. Compre agora com frete grátis.'
  }

  get image () {
    return [iPhoneXRSelect2019Family]
  }

  get title () {
    return 'Comprar iPhone XR - Apple (BR)'
  }
}

export default Product
