import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import template from './template'

@paint(template)
class Simetrico {
  get descricao () {
    return 'Shape simétrico é mesmo em ambas as extremidades'
  }

  get master () {
    return Shape.master?.simetrico
  }

  get nome () {
    return 'Simétrico'
  }

  get slave () {
    return Shape.slave?.simetrico
  }
}

export default Simetrico
