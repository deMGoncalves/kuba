import { paint, repaint } from '@kuba/h'
import actions from './actions'
import template from './template'
import Topping from './topping'

@paint(template)
class Pro extends Topping {
  get nome () {
    return 'Pro Model'
  }

  @repaint
  @actions.change('pro')
  toggle () {
    super.toggle()
    return this
  }
}

export default Pro
