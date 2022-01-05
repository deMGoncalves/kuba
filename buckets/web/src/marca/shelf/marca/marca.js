import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Marca {
  #nome

  get nome () {
    return this.#nome ??= ''
  }

  static stub () {
    return new Marca()
  }
}

export default Marca
