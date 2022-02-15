import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Filter {
  get name () {
    return 'filter'
  }
}

export default Filter
