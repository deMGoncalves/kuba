import { paint } from '@kuba/h'
import component from './component'
import imask from '@kuba/imask'

@paint(component)
@imask
class Telephone {
  [imask.settings] () {
    return {
      element: this[paint.rootElement]().querySelector('input'),
      options: {
        mask: [
          { mask: '+{55} (00) 0000-0000' },
          { mask: '+{55} (00) 0 0000-0000' }
        ]
      }
    }
  }
}

export default Telephone
