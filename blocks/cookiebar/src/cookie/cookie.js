import { paint } from '@kuba/h'
import component from './component'
import echo from '@kuba/echo'

@paint(component)
class Cookie {
  open () {
    echo.emit('cookie:open')
    return this
  }
}

export default Cookie
