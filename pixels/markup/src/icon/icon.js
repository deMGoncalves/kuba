import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Icon {
  get href () {
    return '/favicon.ico'
  }

  get type () {
    return 'image/x-icon'
  }
}

export default Icon
