import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Comparebar {
  get name () {
    return 'comparebar'
  }
}

export default Comparebar
