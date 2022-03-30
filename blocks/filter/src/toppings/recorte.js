import { paint, repaint } from '@kuba/h'
import actions from './actions'
import template from './template'
import Topping from './topping'

@paint(template)
class Recorte extends Topping {
  get nome () {
    return 'Cut-outs'
  }

  @repaint
  @actions.change('recorte')
  toggle () {
    super.toggle()
    return this
  }
}

export default Recorte
