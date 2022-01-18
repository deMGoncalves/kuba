import { paint } from '@kuba/h'
import echo from '@kuba/echo'
import props from '@kuba/props'
import component from './component'
import event from './event'

@paint(component)
@props
class Compare {
  @event.open
  open () {
    echo.emit('compare:open')
    return this
  }
}

export default Compare
