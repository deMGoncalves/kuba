import { paint, repaint } from '@kuba/h'
import effect from './effect'
import Especificacao from './especificacao'
import template from './template'

@paint(template)
@effect
class Wells extends Especificacao {
  get descricao () {
    return 'Poço para as rodas não encostar no shape'
  }

  get nome () {
    return 'Wheel Wells'
  }

  @repaint
  [effect.onChange] (shape) {
    super[effect.onChange](shape.wheel_wells)
    return this
  }
}

export default Wells
