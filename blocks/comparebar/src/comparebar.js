import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import actions from './actions'
import component from './component'
import scroll from './scroll'

@paint(component)
@actions
class Comparebar {
  #opened

  get opened () {
    return this.#opened ??= f.F()
  }

  @repaint
  @scroll.unlock
  close () {
    this.#opened = f.F()
    return this
  }

  @repaint
  @scroll.lock
  open () {
    this.#opened = f.T()
    return this
  }
}

export default Comparebar
