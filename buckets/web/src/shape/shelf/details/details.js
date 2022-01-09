import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Details {
  get title () {
    return 'details'
  }
}

export default Details
