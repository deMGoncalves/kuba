import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Tipo {
  constructor (valor) {
    valor
  }

  static create (valor) {
    return new Tipo(
      valor
    )
  }
}

export default Tipo
