import { paint } from '@h'
import metadata from '@metadata'
import component from './component'

@paint(component)
@metadata
class Home {
  get description () {
    return 'JRMod é uma marca/empresa de modificação e aperfeiçoamento de pedais de efeitos do Brasil, considerada uma das melhores do mercado'
  }

  get title () {
    return 'JRMod & Chutando Lata Pedals'
  }
}

export default Home
