import { paint } from '@kuba/h'
import component from './component'
import imask from '@kuba/imask'

@paint(component)
@imask
class Year {
  [imask.settings] () {
    return {
      element: this[paint.rootElement]().querySelector('input'),
      options: {
        mask: [
          { mask: '0000' },
          { mask: '0000/0000' }
        ]
      }
    }
  }
}

export default Year
