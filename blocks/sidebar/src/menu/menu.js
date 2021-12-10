import { paint } from '@kuba/h'
import echo from '@kuba/echo'
import component from './component'

@paint(component)
class Menu {
  open () {
    echo.emit('sidebar:open')
    return this
  }
}

export default Menu
