import { paint, repaint } from '@kuba/h'
import effect from './effect'
import Especificacao from './especificacao'
import template from './template'

@paint(template)
@effect
class Tail extends Especificacao {
  get descricao () {
    return 'Parte traseira inclinada do shape'
  }

  get nome () {
    return 'Tail'
  }

  @repaint
  [effect.onChange] (shape) {
    super[effect.onChange](shape.tail)
    return this
  }
}

export default Tail
