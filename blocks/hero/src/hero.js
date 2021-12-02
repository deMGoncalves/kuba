import { paint } from '@kuba/h'
import clipboard from '@kuba/clipboard'
import props from '@kuba/props'
import component from './component'
import event from './event'
import schema from './schema.json'

@paint(component)
@props
class Hero {
  @event.copy
  copy () {
    clipboard(`${schema.command} ${schema.package}`)
    return this
  }
}

export default Hero
