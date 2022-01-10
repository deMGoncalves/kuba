import { paint } from '@kuba/h'
import component from './component'
import Details from './details'

@paint(component)
class Shelf {
  get details () {
    return new Details()
  }
}

export default Shelf