import { paint } from '@kuba/h'
import echo from '@kuba/echo'
import component from './component'

@paint(component)
class Search {
  open () {
    echo.emit('search:open')
    return this
  }
}

export default Search
