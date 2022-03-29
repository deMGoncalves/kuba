import { paint, repaint } from '@kuba/h'
import effect from './effect'
import Especificacao from './especificacao'
import template from './template'

@paint(template)
@effect
class Concave extends Especificacao {
  get descricao () {
    return 'Inclinação simétrica das laterais do shape'
  }

  get nome () {
    return 'Concave'
  }

  @repaint
  [effect.onChange] (shape) {
    super[effect.onChange](shape.concave)
    return this
  }
}

export default Concave
