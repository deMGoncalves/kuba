import { paint, repaint } from '@kuba/h'
import component from './component'
import echo from '@kuba/echo'
import scroll from './scroll'

@paint(component)
class Search {
  #show

  get show () {
    return this.#show ??= false
  }

  constructor () {
    echo.on('search:open', () => this.openSearch())
  }

  @repaint
  @scroll.unlock
  hideSearch () {
    this.#show = false
    return this
  }

  @repaint
  @scroll.lock
  openSearch () {
    this.#show = true
    return this
  }
}

export default Search
