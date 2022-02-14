import { paint } from '@kuba/h'
import echo from '@kuba/echo'
import component from './component'

@paint(component)
class Cookie {
  open () {
    echo.emit('cookie:open')
    return this
  }
}

export default Cookie
