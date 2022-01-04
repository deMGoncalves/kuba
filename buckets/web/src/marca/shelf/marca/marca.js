import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Marca {
  get nome () {
    return 'marca'
  }

  static stub () {
    return new Marca()
  }
}

export default Marca
