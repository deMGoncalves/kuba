import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Hero {
  get name () {
    return 'hero'
  }
}

export default Hero
