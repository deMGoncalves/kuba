import { paint, repaint } from '@kuba/h'
import actions from './actions'
import template from './template'
import Topping from './topping'

@paint(template)
class Concave extends Topping {
  get nome () {
    return 'Concave'
  }

  @repaint
  @actions.change('concave')
  toggle () {
    super.toggle()
    return this
  }
}

export default Concave
