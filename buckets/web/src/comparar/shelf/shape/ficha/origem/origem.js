import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Origem {
  constructor (valor) {
    valor
  }

  static create (valor) {
    return new Origem(
      valor
    )
  }
}

export default Origem
