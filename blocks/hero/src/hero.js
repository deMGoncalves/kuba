import { paint } from '@kuba/h'
import props from '@kuba/props'
import component from './component'

@paint(component)
@props
class Hero {
  get name () {
    return 'hero'
  }
}

export default Hero
