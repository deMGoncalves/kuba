import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import template from './template'

@paint(template)
class Concave {
  get descricao () {
    return 'Inclinação simétrica das laterais do shape'
  }

  get master () {
    return Shape.master?.concave
  }

  get nome () {
    return 'Concave'
  }

  get slave () {
    return Shape.slave?.concave
  }
}

export default Concave
