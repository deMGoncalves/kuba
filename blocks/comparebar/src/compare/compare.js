import { paint } from '@kuba/h'
import echo from '@kuba/echo'
import props from '@kuba/props'
import component from './component'

@paint(component)
@props
class Compare {
  open () {
    echo.emit('compare:open')
    return this
  }
}

export default Compare
