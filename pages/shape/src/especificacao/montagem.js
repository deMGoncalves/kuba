import { paint, repaint } from '@kuba/h'
import effect from './effect'
import Especificacao from './especificacao'
import template from './template'

@paint(template)
@effect
class Montagem extends Especificacao {
  get descricao () {
    return 'A maneira como o truck é anexado ao shape'
  }

  get nome () {
    return super.valor
  }

  @repaint
  [effect.onChange] (shape) {
    super[effect.onChange](shape.montagem?.valor)
    return this
  }
}

export default Montagem
