import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Canonical {
  get href () {
    return location.href
  }
}

export default Canonical
