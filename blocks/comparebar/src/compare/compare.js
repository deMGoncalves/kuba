import { paint } from '@kuba/h'
import echo from '@kuba/echo'
import component from './component'

@paint(component)
class Compare {
  open () {
    echo.emit('compare:open')
    return this
  }
}

export default Compare
