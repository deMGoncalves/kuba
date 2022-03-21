import { paint } from '@kuba/h'
import component from './component'
import echo from '@kuba/echo'

@paint(component)
class Search {
  open () {
    echo.emit('search:open')
    return this
  }
}

export default Search
