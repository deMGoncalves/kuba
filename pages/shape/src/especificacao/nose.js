import { paint, repaint } from '@kuba/h'
import effect from './effect'
import Especificacao from './especificacao'
import template from './template'

@paint(template)
@effect
class Nose extends Especificacao {
  get descricao () {
    return 'Parte frontal inclinada do shape'
  }

  get nome () {
    return 'Nose'
  }

  @repaint
  [effect.onChange] (shape) {
    super[effect.onChange](shape.nose)
    return this
  }
}

export default Nose
