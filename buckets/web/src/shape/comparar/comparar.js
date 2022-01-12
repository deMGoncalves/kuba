import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Comparar {
  static create () {
    return new Comparar()
  }
}

export default Comparar
