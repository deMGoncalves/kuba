import { paint } from '@kuba/h'
import props from '@kuba/props'
import component from './component'

@paint(component)
@props
class Splash {
  get url () {
    return '//todomvc.kuba.engineer'
  }
}

export default Splash
