import { paint } from '@kuba/h'
import component from './component'
import echo from '@kuba/echo'
import event from './event'
import props from '@kuba/props'

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
