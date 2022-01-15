import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Wheelbase {
  constructor (valor) {
    valor
  }

  static create (valor) {
    return new Wheelbase(
      valor
    )
  }
}

export default Wheelbase
