import { paint, repaint } from '@kuba/h'
import effect from './effect'
import Especificacao from './especificacao'
import template from './template'

@paint(template)
@effect
class Flares extends Especificacao {
  get descricao () {
    return 'Onda no shape acima da roda para evitar que encostem'
  }

  get nome () {
    return 'Wheel Flares'
  }

  @repaint
  [effect.onChange] (shape) {
    super[effect.onChange](shape.wheel_flares)
    return this
  }
}

export default Flares
