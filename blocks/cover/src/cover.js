import { paint } from '@kuba/h'
import props from '@kuba/props'
import component from './component'

@paint(component)
@props
class Cover {
  get name () {
    return 'kuba'
  }
}

export default Cover
