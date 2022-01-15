import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Laminas {
  constructor (valor) {
    valor
  }

  static create (valor) {
    return new Laminas(
      valor
    )
  }
}

export default Laminas
