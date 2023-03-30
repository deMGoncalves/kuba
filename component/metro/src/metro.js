import { paint } from '@kuba/h'
import component from './component'
import hammer from '@kuba/hammer'

@paint(component)
@hammer
class Metro {
  [hammer.settings] () {
    return {
      element: this[paint.rootElement]().querySelector('.metro__container'),
      options: {
      }
    }
  }
}

export default Metro
