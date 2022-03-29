import { paint, repaint } from '@kuba/h'
import effect from './effect'
import Especificacao from './especificacao'
import template from './template'

@paint(template)
@effect
class Flex extends Especificacao {
  get descricao () {
    return 'Nível de flexibilidade do shape'
  }

  get nome () {
    return super.valor
  }

  @repaint
  [effect.onChange] (shape) {
    super[effect.onChange](shape.flex?.valor)
    return this
  }
}

export default Flex
