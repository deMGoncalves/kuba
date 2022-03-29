import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Variacao {
  get name () {
    return 'variacao'
  }
}

export default Variacao
