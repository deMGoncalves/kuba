import { paint } from '@kuba/h'
import clipboard from '@kuba/clipboard'
import props from '@kuba/props'
import component from './component'

@paint(component)
@props
class Hero {
  clone () {
    clipboard('git clone https://github.com/deMGoncalves/kuba.git')
    return this
  }
}

export default Hero
