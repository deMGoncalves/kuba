import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Nose {
  constructor (valor) {
    valor
  }

  static create (valor) {
    return new Nose(
      valor
    )
  }
}

export default Nose
