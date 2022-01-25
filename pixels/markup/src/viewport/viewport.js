import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Viewport {
  get content () {
    return 'width=device-width, initial-scale=1, shrink-to-fit=no'
  }
}

export default Viewport
