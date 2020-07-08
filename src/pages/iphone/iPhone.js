import { paint } from '@h'
import component from './component'
import markut from '@markup'

@paint(component)
@markut
class iPhone {
  get description () {
    return 'Compre o iPhone XR em seis lindas cores, com Face ID avançado, chip A12 Bionic e tela Liquid Retina. Compre agora com frete grátis.'
  }

  get title () {
    return 'Comprar iPhone XR - Apple (BR)'
  }
}

export default iPhone
