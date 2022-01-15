import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Comparar {
  get name () {
    return 'comparar'
  }
}

export default Comparar
