import { paint } from '@h'
import metadata from '@metadata'
import component from './component'

@paint(component)
@metadata
class Home {
  get title () {
    return 'JRMod - Chutando Lata'
  }

  get description () {
    return 'JRMod é uma marca/empresa de modificação e aperfeiçoamento de pedais de efeitos do Brasil, considerada uma das melhores do mercado'
  }
}

export default Home
