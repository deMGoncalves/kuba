import { paint, repaint } from '@kuba/h'
import notify from './notify'
import template from './template'
import Topping from './topping'

@paint(template)
class Pro extends Topping {
  get nome () {
    return 'Pro Model'
  }

  @repaint
  toggle () {
    super.toggle()
    notify('pro', this)
    return this
  }
}

export default Pro
