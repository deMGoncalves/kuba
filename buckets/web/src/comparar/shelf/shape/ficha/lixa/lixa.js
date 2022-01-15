import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Lixa {
  constructor (valor) {
    valor
  }

  static create (valor) {
    return new Lixa(
      valor
    )
  }
}

export default Lixa
