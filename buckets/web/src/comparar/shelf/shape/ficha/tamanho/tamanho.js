import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Tamanho {
  constructor (valor) {
    valor
  }

  static create (valor) {
    return new Tamanho(
      valor
    )
  }
}

export default Tamanho
