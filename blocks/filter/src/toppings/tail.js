import { paint, repaint } from '@kuba/h'
import actions from './actions'
import template from './template'
import Topping from './topping'

@paint(template)
class Tail extends Topping {
  get nome () {
    return 'Tail'
  }

  @repaint
  @actions.change('tail')
  toggle () {
    super.toggle()
    return this
  }
}

export default Tail
