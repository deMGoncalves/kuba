import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Related {
  static create () {
    return new Related()
  }
}

export default Related
