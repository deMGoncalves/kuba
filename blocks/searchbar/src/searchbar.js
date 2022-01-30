import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import echo from '@kuba/echo'
import component from './component'
import scroll from './scroll'

@paint(component)
class Search {
  #opened

  get opened () {
    return this.#opened ??= f.F()
  }

  constructor () {
    echo.on('search:open', () => this.open())
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
