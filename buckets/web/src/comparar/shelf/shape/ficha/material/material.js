import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Material {
  constructor (valor) {
    valor
  }

  static create (valor) {
    return new Material(
      valor
    )
  }
}

export default Material
