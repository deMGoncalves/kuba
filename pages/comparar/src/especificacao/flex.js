import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import template from './template'

@paint(template)
class Flex {
  get descricao () {
    return 'Nível de flexibilidade do shape'
  }

  get master () {
    return Shape.master?.flex?.valor
  }

  get nome () {
    return 'Flex'
  }

  get slave () {
    return Shape.slave?.flex?.valor
  }
}

export default Flex
