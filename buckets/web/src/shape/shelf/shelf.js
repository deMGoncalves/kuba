import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Shelf {
  get shapes () {
    return []
  }
}

export default Shelf
