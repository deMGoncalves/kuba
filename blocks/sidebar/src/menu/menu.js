import { paint } from '@kuba/h'
import component from './component'
import echo from '@kuba/echo'

@paint(component)
class Menu {
  open () {
    echo.emit('sidebar:open')
    return this
  }
}

export default Menu
