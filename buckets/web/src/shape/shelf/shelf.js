import { paint } from '@kuba/h'
import component from './component'
import Details from './details'
import Thumbnail from './thumbnail'

@paint(component)
class Shelf {
  get thumbnail () {
    return new Thumbnail()
  }

  get details () {
    return new Details()
  }
}

export default Shelf
