import { paint, repaint } from '@kuba/h'
import actions from './actions'
import template from './template'
import Topping from './topping'

@paint(template)
class Simetrico extends Topping {
  get nome () {
    return 'Simétrico'
  }

  @repaint
  @actions.change('simetrico')
  toggle () {
    super.toggle()
    return this
  }
}

export default Simetrico
