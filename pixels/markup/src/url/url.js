import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class URL {
  get content () {
    return location.href
  }
}

export default URL
