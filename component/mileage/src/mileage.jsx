import { paint } from '@kuba/h'
import component from './component'
import imask from '@kuba/imask'

@paint(component)
@imask
class Mileage {
  [imask.settings] () {
    return {
      element: this[paint.rootElement]().querySelector('input'),
      options: {
        mask: '000000'
      }
    }
  }
}

export default Mileage
