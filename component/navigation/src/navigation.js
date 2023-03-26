import { paint, repaint } from '@kuba/h'
import action from './action'
import component from './component'
import echo from '@kuba/echo'

@paint(component)
@action
class Navigation {
  #opened

  get opened () {
    return (this.#opened ??= false)
  }

  @repaint
  close () {
    this.#opened = false
    return this
  }

  @repaint
  [action.toggle] (opened) {
    this.#opened = opened
    return this
  }

  static close () {
    echo.emit('navigation:close')
    return Navigation
  }

  static open () {
    echo.emit('navigation:open')
    return Navigation
  }
}

export default Navigation
