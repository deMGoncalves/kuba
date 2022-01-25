import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Robots {
  get content () {
    return 'index, follow'
  }
}

export default Robots
