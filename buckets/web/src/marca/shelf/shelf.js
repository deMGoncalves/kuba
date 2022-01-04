import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Shelf {
  get name () {
    return 'shelf'
  }
}

export default Shelf
