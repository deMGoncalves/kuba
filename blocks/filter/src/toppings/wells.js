import { paint, repaint } from '@kuba/h'
import actions from './actions'
import template from './template'
import Topping from './topping'

@paint(template)
class Wells extends Topping {
  get nome () {
    return 'Whell Wells'
  }

  @repaint
  @actions.change('wells')
  toggle () {
    super.toggle()
    return this
  }
}

export default Wells
