import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Boilerplate {
  get name () {
    return 'boilerplate'
  }
}

export default Boilerplate
