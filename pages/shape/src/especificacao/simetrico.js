import { paint, repaint } from '@kuba/h'
import effect from './effect'
import Especificacao from './especificacao'
import template from './template'

@paint(template)
@effect
class Simetrico extends Especificacao {
  get descricao () {
    return 'Shape simétrico é mesmo em ambas as extremidades'
  }

  get nome () {
    return 'Simétrico'
  }

  @repaint
  [effect.onChange] (shape) {
    super[effect.onChange](shape.simetrico)
    return this
  }
}

export default Simetrico
