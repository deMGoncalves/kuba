import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Footer {
  get name () {
    return 'footer'
  }
}

export default Footer
