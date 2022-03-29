import { paint, repaint } from '@kuba/h'
import effect from './effect'
import Especificacao from './especificacao'
import template from './template'

@paint(template)
@effect
class Lixa extends Especificacao {
  get descricao () {
    return super.valor
  }

  get nome () {
    return 'Lixa'
  }

  @repaint
  [effect.onChange] (shape) {
    super[effect.onChange](shape.lixa)
    return this
  }
}

export default Lixa
