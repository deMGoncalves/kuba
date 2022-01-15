import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Tail {
  constructor (valor) {
    valor
  }

  static create (valor) {
    return new Tail(
      valor
    )
  }
}

export default Tail
