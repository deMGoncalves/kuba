import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Origem {
  get name () {
    return 'origem'
  }
}

export default Origem
