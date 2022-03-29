import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import template from './template'

@paint(template)
class Nose {
  get descricao () {
    return 'Parte frontal inclinada do shape'
  }

  get master () {
    return Shape.master?.nose
  }

  get nome () {
    return 'Nose'
  }

  get slave () {
    return Shape.slave?.nose
  }
}

export default Nose
