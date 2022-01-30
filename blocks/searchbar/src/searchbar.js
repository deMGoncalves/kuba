import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import action from './action'
import component from './component'
import scroll from './scroll'

@paint(component)
@action
class Search {
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

export default Search
