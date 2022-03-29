import { paint, repaint } from '@kuba/h'
import effect from './effect'
import Especificacao from './especificacao'
import template from './template'

@paint(template)
@effect
class Recortes extends Especificacao {
  get descricao () {
    return 'Recorte ao redor das rodas do shape'
  }

  get nome () {
    return 'Cut-outs'
  }

  @repaint
  [effect.onChange] (shape) {
    super[effect.onChange](shape.cut_outs)
    return this
  }
}

export default Recortes
