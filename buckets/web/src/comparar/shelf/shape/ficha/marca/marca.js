import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Marca {
  constructor (valor) {
    valor
  }

  static create (valor) {
    return new Marca(
      valor
    )
  }
}

export default Marca
