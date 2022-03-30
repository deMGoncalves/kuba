import { paint, repaint } from '@kuba/h'
import actions from './actions'
import template from './template'
import Topping from './topping'

@paint(template)
class Nose extends Topping {
  get nome () {
    return 'Nose'
  }

  @repaint
  @actions.change('nose')
  toggle () {
    super.toggle()
    return this
  }
}

export default Nose
