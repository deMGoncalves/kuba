import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Montagem {
  constructor (valor) {
    valor
  }

  static create (valor) {
    return new Montagem(
      valor
    )
  }
}

export default Montagem
