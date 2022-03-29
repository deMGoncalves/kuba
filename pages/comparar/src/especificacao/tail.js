import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import template from './template'

@paint(template)
class Tail {
  get descricao () {
    return 'Parte traseira inclinada do shape'
  }

  get master () {
    return Shape.master?.tail
  }

  get nome () {
    return 'Tail'
  }

  get slave () {
    return Shape.slave?.tail
  }
}

export default Tail
