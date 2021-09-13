import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import echo from '@kuba/echo'
import props from '@kuba/props'
import component from './component'

@paint(component)
@props
class Widget {
  #opened

  get opened () {
    return this.#opened ??= f.F()
  }

  @repaint
  close () {
    this.#opened = f.F()
    echo.emit('overlayer:close')
    return this
  }

  @repaint
  open () {
    this.#opened = f.T()
    echo.emit('overlayer:open')
    return this
  }
}

export default Widget
