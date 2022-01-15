import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Compare {
  get title () {
    return 'Compare'
  }
}

export default Compare
