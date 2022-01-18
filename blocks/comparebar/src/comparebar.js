import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import scroll from './scroll'
import actions from './actions'
import { redirectTo } from '@kuba/router'

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

  redirect () {
    redirectTo('comparar')
    return this
  }
}

export default Comparebar
