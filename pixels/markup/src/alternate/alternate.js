import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Alternate {
  get href () {
    return `${location.protocol}//${location.host}${location.pathname}`
  }

  get lang () {
    return 'x-default'
  }
}

export default Alternate
