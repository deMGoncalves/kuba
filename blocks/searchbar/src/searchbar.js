import { paint, repaint } from '@kuba/h'
import echo from '@kuba/echo'
import component from './component'
import scroll from './scroll'

@paint(component)
class Search {
  #opened

  get opened () {
    return this.#opened ??= false
  }

  constructor () {
    echo.on('search:open', () => this.openSearch())
  }

  @repaint
  @scroll.unlock
  hideSearch () {
    this.#opened = false
    return this
  }

  @repaint
  @scroll.lock
  openSearch () {
    this.#opened = true
    return this
  }
}

export default Search
