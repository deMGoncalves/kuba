import { paint, repaint } from '@kuba/h'
import action from './action'
import component from './component'
import echo from '@kuba/echo'
import focus from './focus'

@paint(component)
@action
class Search {
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
  @focus
  [action.open] () {
    this.#opened = true
    return this
  }

  static open () {
    echo.emit('search:open')
    return Search
  }
}

export default Search
