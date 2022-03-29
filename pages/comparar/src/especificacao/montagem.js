import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import template from './template'

@paint(template)
class Montagem {
  get descricao () {
    return 'A maneira como o truck é anexado ao shape'
  }

  get master () {
    return Shape.master?.montagem?.valor
  }

  get nome () {
    return 'Montagem'
  }

  get slave () {
    return Shape.slave?.montagem?.valor
  }
}

export default Montagem
