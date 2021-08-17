import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import echo from '@kuba/echo'
import component from './component'

@paint(component)
class Action {
  #className
  #opened
  #slot

  get className () {
    return this.#className
  }

  get opened () {
    return this.#opened ??= f.F()
  }

  get slot () {
    return this.#slot
  }

  constructor (props) {
    this.#className = props.className
    this.#slot = props.slot
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

export default Action
