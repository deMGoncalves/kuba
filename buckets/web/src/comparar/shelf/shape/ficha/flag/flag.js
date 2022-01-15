import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Flag {
  constructor (valor) {
    valor
  }

  static create (valor) {
    return new Flag(
      valor
    )
  }
}

export default Flag
