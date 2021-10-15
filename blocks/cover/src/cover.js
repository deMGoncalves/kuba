import { paint } from '@kuba/h'
import props from '@kuba/props'
import component from './component'

@paint(component)
@props
class Cover {
  get author () {
    return 'deMGoncalves'
  }

  get name () {
    return 'kuba'
  }
}

export default Cover
