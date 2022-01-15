import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Ficha {
  constructor (valor) {
    valor
  }

  static create (valor) {
    return new Ficha(valor)
  }
}

export default Ficha
